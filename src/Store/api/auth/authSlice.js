import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./authAction";
import { getItem, setItem, removeItem } from "@/utils/localstorage/storage";
import { toast } from "react-hot-toast";

const localUser = getItem("user");
const token = getItem("token");
const isEmployee = getItem("isEmployee");

const initialState = {
    user: localUser || null,
    token: token || null,
    isEmployee: isEmployee || false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isEmployee = false;
            removeItem("user");
            removeItem("token");
            removeItem("isEmployee");
            toast.success("Logged out successfully");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isEmployee = getItem("isEmployee") || false;
                state.isLoading = false;
                state.error = null;

                setItem("user", action.payload.user);
                setItem("token", action.payload.token);
                setItem("isEmployee", state.isEmployee);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.user = null;
                state.token = null;
                state.isEmployee = false;
                state.isLoading = false;
                state.error = action.payload?.errorMessage || "Login failed";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
