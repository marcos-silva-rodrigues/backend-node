import "reflect-metadata";
import { createConnection, getConnection, getRepository } from "typeorm";
import { Task } from "./entity/Task";

(async () => {
  try {
    await createConnection();

    // const entityManager = getConnection().manager;
    // const res = await entityManager.findAndCount(Task);

    const taskRepository = getRepository(Task);
    const res = await taskRepository.findAndCount();
    console.log(res);
  } catch (ex) {
    console.error('Error:', ex);
  }
})();
