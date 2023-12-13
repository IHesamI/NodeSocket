-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "userId" INTEGER NOT NULL,
    "images" BYTEA[],
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "messageId" INTEGER NOT NULL,
    "bytes" BYTEA[],

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserTochat" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userName_key" ON "profile"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "_UserTochat_AB_unique" ON "_UserTochat"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTochat_B_index" ON "_UserTochat"("B");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTochat" ADD CONSTRAINT "_UserTochat_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTochat" ADD CONSTRAINT "_UserTochat_B_fkey" FOREIGN KEY ("B") REFERENCES "chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
