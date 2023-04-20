/**
 * @swagger
 * tags: 
 *    - name: Examples
 *      description: Example code. Do not use this as a real service
 *    - name: Users API 
 *    - name: Content API
 *    - name: Auth API
 *    - name: Schema
 */

/*
db.exec(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        thread INTEGER NOT NULL,
        author INTEGER NOT NULL,
        content TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        lastedit INTEGER NOT NULL,
        read BOOL
    );`);

db.exec(`CREATE TABLE IF NOT EXISTS threads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_a INTEGER NOT NULL,
        user_b INTEGER NOT NULL
    );`);
*/


/**
 * @swagger
 * components:
 *   schemas:
 *     UserId:
 *       type: integer
 *       minimum: 1
 *       readOnly: true
 *
 *     thread:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The auto-generated id of the Thread. Will be unique.
 *         user_a:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The UserId of a thread Participant.
 *         user_b:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The UserId of a thread Participant.
 *
 *
 *     messages:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The auto-generated id of the Thread. Will be unique.
 *         thread:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The id of the thread object this message belongs to.
 *         author:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The id of the user who wrote this message.
 *         content:
 *           type: string
 *           minimum: 1
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           readOnly: false
 *           description: The message contents the author wishes to communicate to the sendee.
 *         timestamp:
 *           type: integer
 *           minimum: 1
 *           readOnly true
 *           description: The unix time generated Date.now() in the server on object creation. Used to manage message order in a thread's conversation.
 *         lastedit:
 *           type: integer
 *           minimum: 1
 *           readonly: false
 *           description: The unix time generated by Date.now() in the server on last message update. By default equal to timestamp if no edits have occured.
 *         read:
 *           type: integer
 *           minimum: 1
 *           readonly: false
 *           description: A integer boolean value managing if the reciever has seen the message. By default on object creation, this value is set to false.
  */

