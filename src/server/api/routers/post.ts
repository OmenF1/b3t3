import { resolve } from "path";
import { title } from "process";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
    all: publicProcedure.query(async ({ ctx }) => {
        const posts = await ctx.prisma.post.findMany()
        return posts.map(({id, title, createdOn}) => ({id, title, createdOn}));
    }),
    create: protectedProcedure.input(z.object ({ body: z.string(), title: z.string() })).mutation( async ({ctx, input}) => {
        
        return ctx.prisma.post.create({
            data: {
                title: input.title,
                body: input.body,
                createdBy: "tempHardCode",
            }
        })
    })
})