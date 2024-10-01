-- CreateTable
CREATE TABLE "Mobile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regularPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Mobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laptop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regularPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Laptop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smartwatch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regularPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Smartwatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tablet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regularPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Tablet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twsAndHeadphones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regularPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "twsAndHeadphones_pkey" PRIMARY KEY ("id")
);
