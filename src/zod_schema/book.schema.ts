import { z } from 'zod';

export const getBook = z.object({
    body: z.object({
        name: z.string({required_error: 'name is required!'}),
        genre: z.string({required_error: 'genre is required'})

    })
})

export const addBook = z.object({
    body: z.object({
        name: z.string({required_error: 'name is required!'}),
        genre: z.string({required_error: 'genre is required'})
    })
})