/*'use client'
import styles from './card.module.css'
import InteractiveCard from '@/components/InteractiveCard'
import Image from 'next/image';
import { useState } from 'react';
import { Rating } from '@mui/material';
import { VenueJson, VenueItem } from '../../interface';
import getVenues from '@/libs/getVenues';

interface CardProps {
    venueName: string;
    imgSrc: string;
    onRate?: (venueName: string, rating:number) => void;
}


export default function Card({ venueName, imgSrc, onRate}: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
            <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'
            />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{venueName}</div>
                {onRate && (
                    <Rating
                        onClick={(e)=>{e.stopPropagation()}}
                        name={`${venueName} Rating`}
                        data-testid={`${venueName} Rating`}
                        id={`${venueName} Rating`}
                        value={rating}
                        onChange={(event, newValue) => {
                        setRating(newValue);
                        onRate(venueName, newValue?? 0);
                        }
                    }
                    />
                )}
            </div>

        </InteractiveCard>
        
    );
}*/

/*'use client'
import InteractiveCard from '@/components/InteractiveCard'
import Image from 'next/image';
import { useState } from 'react';
import { Rating } from '@mui/material';

interface CardProps {
    venueName: string;
    imgSrc: string;
    onRate?: (venueName: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRate }: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* รูปภาพ */
                /*<div className="w-full h-[70%] relative">
                    <Image
                        src={imgSrc}
                        alt="Product Picture"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* ชื่อที่พัก + Rating */
                /*<div className="w-full h-[30%] p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{venueName}</h3>
                    {onRate && (
                        <div className="mt-2">
                            <Rating
                                onClick={(e) => e.stopPropagation()}
                                name={`${venueName} Rating`}
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                    onRate(venueName, newValue ?? 0);
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </InteractiveCard>
    );
}*/

/*'use client'
import { useState } from 'react'
import { Rating } from '@mui/material';
import InteractiveCard from '@/components/InteractiveCard'
import Image from 'next/image';

interface CardProps {
    venueName: string;
    imgSrc: string;
    onRate?: (venueName: string, rating:number) => void;
    onAddToFavorite: (venueName: string) => void;  // ฟังก์ชันสำหรับเพิ่มไปที่ Favorite
    isFavorite: boolean;  // เช็คว่าโรงแรมนี้เป็น Favorite หรือยัง
}

export default function Card({ venueName, imgSrc, onRate, onAddToFavorite, isFavorite }: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Product Picture' fill={true} className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{venueName}</div>
                {onRate && (
                    <Rating
                        onClick={(e)=>{e.stopPropagation()}}
                        name={`${venueName} Rating`}
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                            onRate(venueName, newValue?? 0);
                        }}
                    />
                )}
                <button
                    className={`mt-2 p-2 ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
                    onClick={() => onAddToFavorite(venueName)}
                >
                    {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                </button>
            </div>
        </InteractiveCard>
    );
}*/

'use client'
import { useState } from 'react';
import { Rating } from '@mui/material';
import InteractiveCard from '@/components/InteractiveCard';
import Image from 'next/image';

interface CardProps {
    venueName: string;
    imgSrc: string;
    onRate?: (venueName: string, rating: number) => void;
    onAddToFavorite: (venueName: string) => void;  // ฟังก์ชันสำหรับเพิ่มไปที่ Favorite
    isFavorite: boolean;  // เช็คว่าโรงแรมนี้เป็น Favorite หรือยัง
}

export default function Card({ venueName, imgSrc, onRate, onAddToFavorite, isFavorite }: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            {/* ส่วนของรูปภาพ */}
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Hotel Image' fill={true} className='object-cover rounded-t-lg' />
            </div>

            {/* ส่วนของเนื้อหาค่า Rating และปุ่ม Add to Favorite */}
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{venueName}</div>

                {/* ถ้ามีฟังก์ชัน onRate ให้แสดง Rating */}
                {onRate && (
                    <Rating
                        onClick={(e) => { e.stopPropagation(); }}  // ป้องกันการคลิกที่ดาวทำให้กล่องคาร์ดถูกคลิก
                        name={`${venueName} Rating`}
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                            onRate(venueName, newValue ?? 0);
                        }}
                    />
                )}

                {/* ปุ่ม Add to Favorite หรือ Remove from Favorite */}
                <button
                    className={`mt-2 p-2 ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
                    onClick={() => onAddToFavorite(venueName)}
                >
                    {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                </button>
            </div>
        </InteractiveCard>
    );
}


