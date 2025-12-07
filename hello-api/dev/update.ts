import { prisma } from "../libs/prisma";

async function update() {
    const user = await prisma.user.update({
        where: { id: 1 },
        data: { name: "Alice Rhys" },
    });

    console.log(user);
}

update();
