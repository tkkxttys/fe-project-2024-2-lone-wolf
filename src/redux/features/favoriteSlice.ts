// redux/features/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
    favorites: string[];  // กำหนดให้ favorites เป็นอาร์เรย์ของ string
}

const initialState: FavoritesState = {
    favorites: [],  // กำหนดค่าเริ่มต้นเป็นอาร์เรย์ว่าง
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(fav => fav !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
