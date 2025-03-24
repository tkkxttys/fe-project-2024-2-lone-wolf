// rootReducer.ts
import { combineReducers } from 'redux';
import favoritesReducer from './features/favoriteSlice';  // ให้ import favoritesReducer
import bookReducer from './features/bookSlice';  // import bookSlice หรือไฟล์ที่คุณใช้สำหรับการจัดการหนังสือ

// รวม reducers ทั้งหมด
const rootReducer = combineReducers({
  favorites: favoritesReducer,  // เพิ่ม favorites reducer
  bookSlice: bookReducer,  // รวม bookReducer หรือชื่ออื่นๆ ตามที่คุณตั้งไว้
});

export type RootState = ReturnType<typeof rootReducer>;  // กำหนดประเภทของ RootState
export default rootReducer;
