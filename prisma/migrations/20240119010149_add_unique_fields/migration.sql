/*
  Warnings:

  - A unique constraint covering the columns `[algorithm]` on the table `algorithms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `cases` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `cubes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `methods` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "algorithms_algorithm_key" ON "algorithms"("algorithm");

-- CreateIndex
CREATE UNIQUE INDEX "cases_name_key" ON "cases"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cubes_name_key" ON "cubes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "methods_name_key" ON "methods"("name");
