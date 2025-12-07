import { prisma } from "../libs/prisma";

async function read() {
    const user = await prisma.user.findFirst({
        where: { id: 2 },
        include: { posts: true },
    });

    console.log(user);
}

read();
