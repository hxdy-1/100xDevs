// // write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
	connectionString:
		"postgresql://hadimomin02:SHtDnWY5Qh7c@ep-noisy-sun-96463507.us-east-2.aws.neon.tech/test?sslmode=require",
});

// async function createUsersTable() {
// 	await client.connect();
// 	const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
// 	console.log(result);
// }

// createUsersTable();

// async function insertIntoUsersTable() {
// 	await client.connect();
// 	const result = await client.query(`
//         INSERT INTO users (username, email, password)
//         VALUES
//             ('john_doe1', 'john01@example.com', 'password123'),
//             ('jane_doe2', 'jane02@example.com', 'password456');
//     `);
// 	console.log(result);
// }

// insertIntoUsersTable();

// async function getAllUsers() {
// 	await client.connect();
// 	const result = await client.query(`
//         SELECT * FROM users;
//     `);
// 	console.log(result.rows);
// 	return result.rows;
// }

// getAllUsers();

async function getUserByEmail(email: string) {
	await client.connect();
	const result = await client.query(
		`
        SELECT * FROM users
        WHERE email = $1;
    `,
		[email]
	);
	console.log(result.rows[0]); // Assuming there's only one user with the given email
	return result.rows[0]; // Returning the first row (if any)
}

async function main() {
	try {
		const userEmail = "john@example.com"; // Replace with the desired email
		const user = await getUserByEmail(userEmail);
		if (user) {
			console.log("User found:", user);
		} else {
			console.log("User not found");
		}
	} catch (error) {
		console.error("Error:", error);
	} finally {
		await client.end();
	}
}

// main();
