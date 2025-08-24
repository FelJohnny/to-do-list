import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const USER_STORAGE_KEY = "@todoapp:userName";
//busca o usuario do storage do dispositivo
export const loadUserFromStorage = createAsyncThunk(
  'user/loadFromStorage',
  async () => {
    const savedName = await AsyncStorage.getItem(USER_STORAGE_KEY);    
    return savedName;
  }
);
//salva o usuario no storage do dispositivo
export const saveUserToStorage = createAsyncThunk(
  'user/saveToStorage', 
  async (userName: string) => {
    await AsyncStorage.setItem(USER_STORAGE_KEY, userName);
    return userName;
  }
);

// remove o usuario do storage do dispositivo
export const removeUserFromStorage = createAsyncThunk(
  'user/removeFromStorage',
  async () => {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
    return null; 
  }
);

const initialState = {
    userName: null as string | null,
    isLoaded: false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
         setUserName(state, action) {
            state.userName = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder
      // Quando carregar do storage
      .addCase(loadUserFromStorage.fulfilled, (state, action) => {
        state.userName = action.payload;
        state.isLoaded = true;
      })
      .addCase(loadUserFromStorage.rejected, (state) => {
        state.isLoaded = true;
      })
      // Quando salvar no storage
      .addCase(saveUserToStorage.fulfilled, (state, action) => {
        state.userName = action.payload;
      })
      .addCase(removeUserFromStorage.fulfilled, (state) => {
        state.userName = null;
      });
      
  }
})

export const {setUserName} = userSlice.actions

export default userSlice.reducer;



export const selectUserName = (state: RootState) => state.user.userName;
export const selectUserLoaded = (state: RootState) => state.user.isLoaded;