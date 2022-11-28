import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

import { Request, Response } from 'express';
import { prisma } from "../config/db";

  export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
};

  export const addUser = async (req: Request, res: Response) => {
    try{
        const newUser = req.body as User;
        await prisma.user.create({
            data: newUser,
        });
        return res.status(201).json({
            message: "New User Created "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}