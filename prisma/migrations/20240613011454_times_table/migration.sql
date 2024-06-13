-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "timeInMs" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);
