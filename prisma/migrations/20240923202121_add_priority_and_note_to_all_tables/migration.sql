-- AlterTable
ALTER TABLE "Laptop" ADD COLUMN     "note" TEXT NOT NULL DEFAULT 'laptop',
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "Mobile" ADD COLUMN     "note" TEXT NOT NULL DEFAULT 'mobile',
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "Smartwatch" ADD COLUMN     "note" TEXT NOT NULL DEFAULT 'smartwatch',
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "Tablet" ADD COLUMN     "note" TEXT NOT NULL DEFAULT 'tablet',
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "twsAndHeadphones" ADD COLUMN     "note" TEXT NOT NULL DEFAULT 'twsAndHeadphones',
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 100;
