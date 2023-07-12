import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
interface ICrendential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};
export const createUser = createAsyncThunk(
  'user/createuser',
  async ({ email, password }: ICrendential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const { } = productSlice.actions;

export default userSlice.reducer;
