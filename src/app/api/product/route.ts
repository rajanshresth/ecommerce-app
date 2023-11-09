import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/server/db/client';
import { ProductSchema } from '@/lib/validation/Product_schema';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session?.user.userRole) {
        return NextResponse.json({}, { status: 401 });
    }

    const body = await request.json();
    const { name, description, price, image, sizes, quantity, category } = body;

    const validation = ProductSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newProduct = await prisma.product.create({
        data: {
            name,
            description,
            price,
            image,
            sizes,
            quantity,
            category,
        },
    });
    return NextResponse.json(newProduct, { status: 201 });
}


export async function GET() {
    const dbProduct = await prisma.product.findMany();
    return NextResponse.json(dbProduct);
}
