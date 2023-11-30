/*
  Warnings:

  - A unique constraint covering the columns `[registration_number]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registration_number` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "registration_number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_registration_number_key" ON "Admin"("registration_number");
