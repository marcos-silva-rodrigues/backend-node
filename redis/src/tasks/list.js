const Task = require('../schemas/Task');
const clientRedis = require('../redis');

module.exports = async (req, res) => {
  try {
    await clientRedis.connect();
    const cached = await clientRedis.get('tasks');
    if (cached) {
      return res.status(200).json({ data: cached })
    }
    const data = await Task.find({});
      
    await clientRedis.set('tasks', JSON.stringify(data), {EX: 60 });

    return res.status(200).json({ data });

  } catch (err) {
    return res.status(500).json({ err })
  } finally {
    await clientRedis.quit();
  }
}