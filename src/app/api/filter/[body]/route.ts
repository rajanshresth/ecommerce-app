import prisma from '@/server/db/client';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
    category?: Prisma.EnumCategoryFilter;
    price?: number;
}

export async function GET(
    request: NextRequest,
    { params }: { params: Params }
) {
    try {
        const searchData = await prisma.product.findMany({
            where: {},
        });
        console.log('searchData', searchData);
        return NextResponse.json(searchData, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, {
            status: 500,
        });
    }
}
