import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  data: []
}

export const recentListings = createSlice({
  name: 'recentListings',
  initialState,
  reducers: {
    updateListings: (state, action) => {
      return {
        isLoaded: true,
        data: action.payload,

      }
    },
  },
})
// Action creators are generated for each case reducer function
export const { updateListings } = recentListings.actions

export default recentListings.reducer
