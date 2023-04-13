// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//     data: {},
//     isLoading: false,
//     error: null,
// }

// export const dishSlice = createSlice({
//   name: 'dish',
//   initialState,
//   reducers: {
//     fetchDishDetailsPending: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     fetchDishDetailsSuccess: (state, action) => {
//       state.data = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     fetchDishDetailsError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// })

// export const dishDetails = () => async (dispatch) => {
//   dispatch(dishSlice.actions.fetchDishDetailsPending());
//   try {
//     const { data } = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099');
//     dispatch(dishSlice.actions.fetchDishDetailsSuccess(data));
//   } catch (error) {
//     dispatch(dishSlice.actions.fetchDishDetailsError(error.message));
//   }
// }

// export default dishSlice.reducer