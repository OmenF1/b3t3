import { resolve } from "path";
import { title } from "process";
import { z } from "zod";
import { postInput } from "~/types/postTypes";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
    all: publicProcedure.query(async ({ ctx }) => {
        const posts = await ctx.prisma.post.findMany()
        return posts.map(({id, title, body}) => ({id, title, body}));
    }),
    single: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
        const post = await ctx.prisma.post.findFirst({
            where: {
                id: input.id
            }
        })
        return post;
    }),
    create: publicProcedure.input(postInput).mutation(async ({ ctx, input }) => {
        
        return ctx.prisma.post.create({
            data: {
                title: input.title,
                body: input.body,
                createdBy: "tempHardCode",
            }
        })
    })
})