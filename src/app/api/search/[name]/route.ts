import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { name: string } }
) {
    console.log(params.name);
    try {
        const searchData = await prisma.product.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: params.name,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
        });
        return NextResponse.json(searchData, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, {
            status: 404,
        });
    }
}
