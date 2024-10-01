-- CreateTable
CREATE TABLE "LastUpdated" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LastUpdated_pkey" PRIMARY KEY ("id")
);
