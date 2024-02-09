import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
	username: string,
	password: string,
	name: string
) {
	const result = await client.query(
		`
        INSERT INTO users (username, password, name)
        VALUES
            ($1, $2, $3)
        RETURNING *
    `,
		[username, password, name]
	);

	console.log(result.rows[0]);
	return result.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
	const result = await client.query(
		`
        SELECT * FROM users
        WHERE id = $1;
    `,
		[userId]
	);

	console.log(result.rows[0]);
	return result.rows[0];
}
