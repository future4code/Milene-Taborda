import {connection} from '../connection';

export const createNewUser = async (name: string, nickname: string, email: string): Promise<void> => {
  await connection.raw(`
     INSERT INTO TodoListUser
     VALUES(
       "${Date.now()}",
       "${name}",
       "${nickname}",
       "${email}"
     );
 `)
};

export const getUserById = async (userId: string) => {
 const result = await connection.raw(`
   SELECT * FROM TodoListUser
   WHERE id = "${userId}"
 `);
 return result[0][0];
}

export const editInfoUser = async (id: string, name: string, nickname: string) => {
 const result = await connection.raw(`
   UPDATE TodoListUser
   SET name = "${name}", nickname = "${nickname}"
   WHERE id = "${id}"
 `);
 return result[0];
};

export const getAllUsers = async ( ) => {
  const result = await connection.raw(`
    SELECT * FROM TodoListUser ;
  `);
  return result[0][0];
};

