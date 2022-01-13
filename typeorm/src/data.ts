import "reflect-metadata";
import { createConnection, getConnection, getRepository } from "typeorm";
import { TaskRepository } from './entity/TaskRepository';
import { Task } from './entity/Task';

(async () => {
  try {
    const con = await createConnection();

    // const entityManager = getConnection().manager;
    // const res = await entityManager.findAndCount(Task);

    const taskRepository = con.getCustomRepository(TaskRepository);

    const task = new Task();

    task.title = 'Task 2';
    task.done = true;

    const res = await taskRepository.save(task);
    console.log(res);
  } catch (ex) {
    console.error('Error:', ex);
  }
})();
