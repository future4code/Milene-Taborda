import {connection} from '../connection';

export const createTask = async (
  id:string,
  title:string,
  description:string,
  limitDate:string,
  creatorUserId:string,
 ) => {
   await connection.raw(`
    INSERT INTO TodoListTask(id ,title ,description , limit_date, creator_user_id)
    VALUE ("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
  `);
}

export const getTaskById = async (taskId: string) => {
  const result = await connection.raw(`
    SELECT * FROM TodoListTask
    WHERE id = "${taskId}"
  `);
  return result[0][0];
}

