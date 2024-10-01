-- CreateTable
CREATE TABLE "MobilePriceTier" (
    "id" SERIAL NOT NULL,
    "startRange" INTEGER NOT NULL,
    "endRange" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MobilePriceTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaptopPriceTier" (
    "id" SERIAL NOT NULL,
    "startRange" INTEGER NOT NULL,
    "endRange" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "LaptopPriceTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SmartwatchPriceTier" (
    "id" SERIAL NOT NULL,
    "startRange" INTEGER NOT NULL,
    "endRange" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SmartwatchPriceTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabletPriceTier" (
    "id" SERIAL NOT NULL,
    "startRange" INTEGER NOT NULL,
    "endRange" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TabletPriceTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twsAndHeadphonesPriceTier" (
    "id" SERIAL NOT NULL,
    "startRange" INTEGER NOT NULL,
    "endRange" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "twsAndHeadphonesPriceTier_pkey" PRIMARY KEY ("id")
);
