import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// กำหนดประเภทของ state ของ favorites
interface FavoritesState {
    favorites: string[];  // สมมุติว่าเก็บรายการโปรดเป็น array ของ string
}

const initialState: FavoritesState = {
    favorites: [],
};

// สร้าง slice สำหรับ favorites
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            state.favorites.push(action.payload);  // เพิ่มรายการโปรด
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(item => item !== action.payload);  // ลบรายการโปรด
        },
    },
});

// Export actions และ reducer ของ favorites
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
