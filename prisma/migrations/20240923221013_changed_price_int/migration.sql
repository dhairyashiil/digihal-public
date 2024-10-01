/*
  Warnings:

  - Changed the type of `regularPrice` on the `Laptop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `Laptop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regularPrice` on the `Mobile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `Mobile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regularPrice` on the `Smartwatch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `Smartwatch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regularPrice` on the `Tablet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `Tablet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regularPrice` on the `twsAndHeadphones` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `twsAndHeadphones` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Laptop" DROP COLUMN "regularPrice",
ADD COLUMN     "regularPrice" INTEGER NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Mobile" DROP COLUMN "regularPrice",
ADD COLUMN     "regularPrice" INTEGER NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Smartwatch" DROP COLUMN "regularPrice",
ADD COLUMN     "regularPrice" INTEGER NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tablet" DROP COLUMN "regularPrice",
ADD COLUMN     "regularPrice" INTEGER NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "twsAndHeadphones" DROP COLUMN "regularPrice",
ADD COLUMN     "regularPrice" INTEGER NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" INTEGER NOT NULL;
