import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

import { prisma } from "./libs/prisma";

app.get("/", (req, res) => {
    res.json({ msg: "Hello API running..." });
});

app.get("/tasks", async (req, res) => {
    const tasks = await prisma.todo.findMany({
        orderBy: {
            id: "desc",
        },
    });

    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const name = req.body?.name;
    if(!name) {
        return res.status(400).json({ msg: "name is required" });
    }

    const task = await prisma.todo.create({
        data: { name }
    });

    res.status(201).json(task);
});

app.put("/tasks/:id/toggle", async (req, res) => {
    const id = Number(req.params.id);

    const currentTask = await prisma.todo.findFirst({
        where: { id }
    });

    const updatedTask = await prisma.todo.update({
        where: { id },
        data: { done: !currentTask?.done }
    });

    res.json(updatedTask);
});

app.delete("/tasks/:id", async (req, res) => {
	const id = Number(req.params.id);
	const task = await prisma.todo.delete({
		where: { id },
	});

	res.json(task);
});

app.listen(8800, () => {
    console.log("Hello API at 8800...");
});
