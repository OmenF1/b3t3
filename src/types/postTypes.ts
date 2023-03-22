import { infer, z } from 'zod';
import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '~/server/api/root';

export const postInput = z.object ({
    title: z.string(),
    body: z.string(),
    
})

type RouterOuputs = inferRouterOutputs<AppRouter>;
type allPostsOutput = RouterOuputs['post']['all'];

export type Post = allPostsOutput[number];