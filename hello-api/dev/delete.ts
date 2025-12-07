import { prisma } from "../libs/prisma";

async function remove() {
    await prisma.post.deleteMany({
        where:{ userId: 2 },
    });

    const user = await prisma.user.delete({
        where: { id: 2 },
    });

    console.log(user);
}

remove();
