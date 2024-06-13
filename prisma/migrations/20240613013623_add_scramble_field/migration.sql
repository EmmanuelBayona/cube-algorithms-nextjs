/*
  Warnings:

  - Added the required column `scramble` to the `times` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "times" ADD COLUMN     "scramble" TEXT NOT NULL;
