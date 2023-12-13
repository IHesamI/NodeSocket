/*
  Warnings:

  - You are about to drop the column `images` on the `profile` table. All the data in the column will be lost.
  - Added the required column `profileId` to the `media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "media" ADD COLUMN     "profileId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "message" ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "images";

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
