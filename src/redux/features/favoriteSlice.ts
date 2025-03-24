import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    favorites: string[]; // เก็บชื่อโรงแรมที่เป็น Favorite
}

const initialState: FavoriteState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(fav => fav !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

