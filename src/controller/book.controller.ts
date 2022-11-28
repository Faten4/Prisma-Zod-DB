import { Book } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";


export const getAllBooks = async (req: Request, res: Response) => {
  const book= await prisma.book.findMany();
  return res.status(200).json(book);
  }

export const addBook = async (req: Request, res: Response) => {
  try{
      const newBook = req.body as Book;
      await prisma.book.create({
          data: newBook,
          });
      return res.status(201).json({
          message: "New Book Created "
      });
  }catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      res.status(400).json({
        message: prismaError.message,
      });
    }
}