'use client';
import React, { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';

interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
    const handleUpload = useCallback(
        (result: any) => {
            onChange(result.info.secure_url);
        },
        [onChange]
    );
    return (
        <div className='flex flex-col space-y-4'>
            <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset='kd3uauza'
                options={{ sources: ['local'], maxFiles: 3 }}
            >
                {({ open }) => {
                    return (
                        <Button
                            className='bg-blue-400'
                            onClick={() => open?.()}
                        >
                            Upload an Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
            {value && (
                <Image
                    src={value}
                    width={270}
                    height={240}
                    alt='Description of the image'
                    className='rounded-md'
                />
            )}
        </div>
    );
};

export default ImageUpload;
