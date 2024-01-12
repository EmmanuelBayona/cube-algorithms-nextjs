import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const prisma = new PrismaClient();

export const appRouter = router({
    getTodos: publicProcedure.query(async () => {
        return [10, 20, 30]
    }),
    getMethods: publicProcedure.input(z.object({ cubeId: z.number() })).query(async (opts) => {
        return await prisma.method.findMany({
            where: {
                cubeId: opts.input.cubeId
            }
        })
    })
})

export type AppRouter = typeof appRouter;