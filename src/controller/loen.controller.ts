  import { Lone } from "@prisma/client";
  import { Request, Response } from "express";
  import { prisma } from "../config/db";
  import { pSchemaType } from "../zod_schema/schema";
  
  // get all laons
  export const getAllLoan = async (req: Request, res: Response) => {
    try {
      const allLone = await prisma.lone.findMany();
      return res.status(200).json(allLone);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  
  export const addLoan = async (req: Request, res: Response) => {
    try {
      const newLoan = req.body as Lone;
      await prisma.lone.create({ data: newLoan });
  
      return res.status(201).json({
        message: "lone added",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  ////
  export const lendBook = async (req: Request, res: Response) => {
    try {
      const {userid} = req.params as pSchemaType;
  
      const getUserBooks = await prisma.user.findUnique({
       
        where: {id:userid},
        select: {
          username: true,
          loen: true,
        },
      });
  
      return res.status(200).json(getUserBooks);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };