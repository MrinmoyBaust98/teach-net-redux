/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hooks';
import { setLoading, setuser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  // parsistency maintain
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setuser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
