'use client';
// CartPage component
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import axios from 'axios';
// import { useRouter } from 'next/navigation';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

const CartPage = () => {
    const { cart, addToCart, removeFromCart } = useCart();
    const [dbProducts, setDbProducts] = useState<Product[]>([]);
    // const router = useRouter();

    useEffect(() => {
        // Fetch product information for each item in the cart
        const fetchProductDetails = async () => {
            const productDetails = await Promise.all(
                cart.items.map((item) =>
                    fetch(`/api/product/${item.productId}`).then((res) =>
                        res.json()
                    )
                )
            );

            setDbProducts(productDetails);
        };

        fetchProductDetails();
    }, [cart]);

    const handleAddToCart = (productId: string) => {
        addToCart(productId, 1);
    };

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    };

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        return dbProducts.reduce(
            (total, dbProduct, index) =>
                total + (dbProduct?.price || 0) * cart.items[index]?.quantity,
            0
        );
    };

    // Function to handle checkout
    const handleCheckout = async () => {
        const data = cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));
        await axios.post('/api/cart', data);
    };

    // Function to handle payment

    if (cart.items.length === 0) {
        return (
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-2xl font-bold'>Cart Page</h1>
                <p>Cart is empty</p>
            </div>
        );
    } else {
        return (
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl font-bold'>Cart Page</h1>
                    <div className='flex justify-between gap-4'>
                        <Table className='w-full rounded-md bg-gray-100'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='font-medium'>
                                        Image
                                    </TableHead>
                                    <TableHead className='font-medium'>
                                        Product Name
                                    </TableHead>
                                    <TableHead className='font-medium'>
                                        Price
                                    </TableHead>
                                    <TableHead className='font-medium'>
                                        <div>
                                            <p>Quantity</p>
                                        </div>
                                    </TableHead>
                                    <TableHead className='font-medium'>
                                        Total
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dbProducts.map((dbProduct, index) => (
                                    <TableRow
                                        key={cart.items[index]?.productId}
                                    >
                                        <TableCell>
                                            {dbProduct && (
                                                <Image
                                                    src={dbProduct?.image}
                                                    alt={dbProduct?.name}
                                                    width={50}
                                                    height={50}
                                                    className='rounded-md'
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>{dbProduct?.name}</TableCell>
                                        <TableCell>
                                            {dbProduct?.price}
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex gap-2'>
                                                <button
                                                    onClick={() =>
                                                        handleAddToCart(
                                                            cart.items[index]
                                                                .productId
                                                        )
                                                    }
                                                >
                                                    <AiOutlinePlus />
                                                </button>
                                                <p className='text-lg font-semibold'>
                                                    {cart &&
                                                        cart.items[index]
                                                            ?.quantity}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        handleRemoveFromCart(
                                                            cart.items[index]
                                                                .productId
                                                        )
                                                    }
                                                >
                                                    <AiOutlineMinus />
                                                </button>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {dbProduct &&
                                                dbProduct?.price *
                                                    cart.items[index]?.quantity}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <div className='flex h-40 w-1/4 flex-col items-center justify-center rounded-md bg-gray-100'>
                            <h1 className='text-2xl font-bold'>
                                Total: ${calculateTotalPrice()}
                            </h1>
                            <Button
                                className='rounded-md bg-gray-900 px-4 py-2 text-white'
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CartPage;
