import { Router } from "express";
const router = Router();

import { prisma } from "../libs/prisma";

import { auth } from "../middlewares/auth";

router.get("/", async (req, res) => {
		const posts = await prisma.post.findMany({
			orderBy: {
				id: "desc",
			},
			take: 20,
			include: {
				user: true,
				likes: true,
				comments: true,
			},
		});

		res.json(posts);
	}
);

router.post("/", auth, async (req, res) => {
    const user = res.locals.user;
    const content = req.body?.content;

    if(!content) {
        return res.status(400).json({ msg: "content is required" });
    }

    const post = await prisma.post.create({
        data: {
            content,
            userId: user.id,
        }
    });

    res.json(post);
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;

	const post = await prisma.post.findUnique({
		where: { id: Number(id) },
		include: {
			user: true,
			likes: true,
			comments: {
                include: { user: true }
            },
		},
	});

	if (!post) {
		return res.status(404).json({ msg: "Post not found" });
	}

	res.json(post);
});

router.post("/:id/like", auth, async (req, res) => {
    const { id: userId } = res.locals.user;
    const postId = Number(req.params.id);

    const like = await prisma.like.create({
        data: { postId, userId },
    });

    res.json(like);
});

router.delete("/:id/like", auth, async (req, res) => {
	const { id: userId } = res.locals.user;
	const postId = Number(req.params.id);

	const like = await prisma.like.deleteMany({
		where: { postId, userId },
	});

	res.json(like);
});

export default router;
