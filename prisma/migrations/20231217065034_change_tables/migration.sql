/*
  Warnings:

  - You are about to drop the column `messageId` on the `media` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId]` on the table `message` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[chatId]` on the table `message` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mediaId` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaId` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_messageId_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_profileId_fkey";

-- AlterTable
ALTER TABLE "media" DROP COLUMN "messageId",
DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "message" ADD COLUMN     "mediaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "mediaId" INTEGER NOT NULL,
ADD CONSTRAINT "profile_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "message_authorId_key" ON "message"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "message_chatId_key" ON "message"("chatId");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
