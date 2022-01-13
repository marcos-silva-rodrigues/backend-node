import { Repository, EntityRepository } from 'typeorm';
import { Task } from './Task';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  findByTitle(title: string) {
    return this.createQueryBuilder("tasks")
      .where("task.title = :title", { title })
      .getMany();
  }
}