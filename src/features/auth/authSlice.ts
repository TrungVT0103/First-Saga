import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";
import { fileURLToPath } from "url";

// Với redux tool kit thì viết chung slice và reducer trong 1 file rồi export, chứ k chia ra như redux thunk
export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}

export interface LoginPayload {
    username: string;
    password: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    // bằng null là lỗi ((( :
    currentUser: undefined
}

const authSlice: any = createSlice({
    name: 'auth',
    initialState,
    // state này sẽ sử dụng data từ initialState
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true
            state.logging = false;
            state.currentUser = action.payload
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        // do logout k can call api
        logout(state) {
            state.isLoggedIn = false
            state.currentUser = undefined
        }
    }
})


// Action
export const authActions = authSlice.actions;

// Reducer
// nhớ khai báo vào store (((( :
const authReducer = authSlice.reducer;
export default authReducer;

// Selector
const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
const selectLogging = (state: any) => state.auth.logging