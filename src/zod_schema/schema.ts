import { z } from "zod";

export const addUserS = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required !" }),
    password: z
      .string({ required_error: "password is required !" })
      .min(6, "password must be more than 5 Chars"),
  }),
});

export const addBooksS = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2 Chars"),
    genre: z
      .string({ required_error: "genre is required !" })
      .min(3, "genre must be more than 2 Chars"),
  }),
});

export const addLoanS = z.object({
  body: z.object({
    book_id: z.string({ required_error: "book id is required !" }),
    user_id: z.string({ required_error: "user id is required !" }),
  }),
});

export const pSchema = z.object({
  params: z.object({
    userid: z.string(),
  }),
});

export type pSchemaType = z.infer<typeof pSchema>['params'];