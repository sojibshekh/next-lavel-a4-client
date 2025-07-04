import { createSlice,  } from '@reduxjs/toolkit'
//import type { RootState } from '../../store'


const initialState = {
  value: 100,
  books: [],
  borrowedBooks: [],
}

export const bookSlice = createSlice({
  name: 'books',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
   
   
  }
})

//export const { } = bookSlice.actions

// Other code such as selectors can use the imported `RootState` type
// Replace 'book' with the correct key used in your store's root reducer for this slice
//export const selectCount = (state: RootState) => state.book.value;

export default bookSlice.reducer