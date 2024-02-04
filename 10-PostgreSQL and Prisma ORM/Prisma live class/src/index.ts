import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { PrismaClient } from '@prisma/client/edge'
// const prisma = new PrismaClient()

async function insertUser(
	username: string,
	password: string,
	firstName: string,
	lastName: string
) {
	const res = await prisma.user.create({
		data: {
			username,
			password,
			firstName,
			lastName,
		},
		select: {
			id: true,
			password: true,
		},
	});

	console.log(res);
}

// insertUser("Hady123", "random123", "Abdul Haadi", "Momin");

interface UpdateParams {
	firstName: string;
	lastName: string;
}

async function updateUser(
	username: string,
	{ firstName, lastName }: UpdateParams
) {
	const res = await prisma.user.update({
		where: { username },
		data: {
			firstName,
			lastName,
		},
	});
	console.log(res);
}

// updateUser("Hady", {
// 	firstName: "new name",
// 	lastName: "Momin",
// });

async function getUser(username: string) {
	const user = await prisma.user.findFirst({
		where: {
			username: username,
		},
	});
	console.log(user);
}

getUser("Hady123");
