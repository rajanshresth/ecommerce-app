import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const {
        name,
        registration_number,
        address,
        phone_number,
        description,
        userEmail,
    } = body;

    try {
        // Try to find an existing User with the same userId
        const existingUser = await prisma.admin.findUnique({
            where: {
                userEmail,
            },
        });

        if (existingUser) {
            // If admin with the same userId exists, create a new admin with a different adminId
            const business = await prisma.admin.create({
                data: {
                    name,
                    registration_number,
                    address,
                    phone_number,
                    description,
                    userEmail,
                },
            });

            const businessStringified = {
                ...business,
            };

            return NextResponse.json(businessStringified, { status: 200 });
        } else {
            // If no admin with the same userId exists, create a new admin
            const business = await prisma.admin.create({
                data: {
                    name,
                    registration_number,
                    address,
                    phone_number,
                    description,
                    userEmail,
                },
            });

            return NextResponse.json(business, { status: 200 });
        }
    } catch (error) {
        console.error('Error creating admin:', error);
        return NextResponse.json(
            { error: 'Failed to create admin' },
            { status: 500 }
        );
    }
}
