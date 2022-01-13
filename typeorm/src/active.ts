import "reflect-metadata";
import { createConnection, getConnection, getRepository } from "typeorm";
import { TaskActive } from "./entity/TaskActive";

(async () => {
  try {
    await createConnection();

    const task = new TaskActive();

    task.title = 'Task 1';
    task.done = true;

    const res = await task.save();
    console.log(res);
  } catch (ex) {
    console.error('Error:', ex);
  }
})();
