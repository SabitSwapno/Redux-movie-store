import { createSlice } from '@reduxjs/toolkit'
import movies from '../../movieData.json'

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        discover: movies,
        finishedlist: [],
        watchlist: [],
    },

    reducers: {
        addTofinishedList: (state, { payload }) => {
            state.finishedlist.push(payload)
        },
        removeFromFinishedList: (state, { payload }) => {
            state.finishedlist = state.finishedlist.filter(movie => movie.id !== payload.id)
        },
        addToWatchlist: (state, { payload }) => {
            state.watchlist.push(payload)
        },
        removeFromWatchList: (state, { payload }) => {
            state.watchlist = state.watchlist.filter(movie => movie.id !== payload.id)
        }
    }
})

export const { addTofinishedList, removeFromFinishedList, addToWatchlist, removeFromWatchList } = movieSlice.actions;

export default movieSlice.reducer;