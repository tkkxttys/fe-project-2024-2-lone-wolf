'use client'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '@/redux/features/favoriteSlice';
import { RootState } from '@/redux/store';
import Link from 'next/link';

export default function MyFavorites() {
    const dispatch = useDispatch();

    const favorites = useSelector((state: RootState) => state.favorites?.favorites || []);


    const handleRemoveFavorite = (venueName: string) => {
        dispatch(removeFavorite(venueName));
    };

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">My Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <div>
                    {favorites.map((venueName: string) => (
                        <div key={venueName} className="flex justify-between items-center p-2">
                            <Link href={`/venue/${venueName}`} className="text-blue-500">
                                {venueName}
                            </Link>
                            <button
                                className="text-red-500"
                                onClick={() => handleRemoveFavorite(venueName)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
