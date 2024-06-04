import UserController from "@/controllers/user.controller";
import { Router } from "express";

const userRouter = Router()

// Get user api
userRouter.get('/:id', UserController.getUser)

// Get users api
userRouter.get("/", UserController.getUsers);

// Create user api
userRouter.post("/", UserController.createUser);

// Update user api
userRouter.put("/:id", UserController.updateUser);

// Delete user api
userRouter.delete("/:id", UserController.deleteUser);


export default userRouter