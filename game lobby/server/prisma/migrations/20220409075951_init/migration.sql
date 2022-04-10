-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "color1" TEXT NOT NULL DEFAULT E'white',
    "color2" TEXT NOT NULL DEFAULT E'white',
    "color3" TEXT NOT NULL DEFAULT E'white',
    "color4" TEXT NOT NULL DEFAULT E'white',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
