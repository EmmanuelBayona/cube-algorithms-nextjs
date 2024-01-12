import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";
import { httpBatchLink } from "@trpc/client";

const createCaller = createCallerFactory(appRouter);
export const serverClient = createCaller({
    links: [
        httpBatchLink({
            url: "/api/trpc",
        })
    ]
});