import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hooks';
import { setuser } from './redux/features/user/userSlice';

function App() {
  const dispatch = useAppDispatch();
  // parsistency maintain
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setuser(user.email));
    }
  });

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
