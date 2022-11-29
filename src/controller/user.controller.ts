import { User } from "@prisma/client";


import { Request, Response } from 'express';
import { prisma } from "../config/db";

  export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;

    await prisma.user.create({
      data: newUser,
    });
    return res.status(200).json({
      message: "user added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};

