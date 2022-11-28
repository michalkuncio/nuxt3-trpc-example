import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
    getBook: publicProcedure
        .input(
            z.object({
                id: z.number()
            })
        )
        .query(({ input }) => {
            const id = input?.id;

            const books = [
                {
                    id: 1,
                    title: 'Harry Potter',
                    author: 'J. K. Rowling'
                },
                {
                    id: 2,
                    title: 'Lord of The Rings',
                    author: 'J.R.R. Tolkien'
                }
            ];

            return books.find((book) => {
                return book.id === id;
            });
        }),
    addBook: publicProcedure
        .input(z.object({
            title: z.string(),
            author: z.string()
        }))
        .mutation((req) => {
            const newBook = {
                title: req.input.title,
                author: req.input.author
            };

            return newBook;
        })
});

export type AppRouter = typeof appRouter
