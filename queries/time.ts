import prisma from "@/lib/prisma";

export const addNewTime = async(time: number, userId: string, date: Date, scramble: string) => {
    return prisma.time.create({
        data: {
            timeInMs: time,
            userId: userId,
            date: date,
            scramble: scramble
        }
    })
}