/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `algorithms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `likes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "algorithms" DROP CONSTRAINT "algorithms_userId_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_userId_fkey";

-- AlterTable
ALTER TABLE "algorithms" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "likes" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "users";

-- CreateIndex
CREATE UNIQUE INDEX "algorithms_userId_key" ON "algorithms"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_userId_key" ON "likes"("userId");
