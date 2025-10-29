/*
  Warnings:

  - You are about to drop the column `image` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Favorite` table. All the data in the column will be lost.
  - Added the required column `name` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
