import { Toaster } from "react-hot-toast";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PhoneBook } from "pages/PhoneBook/PhoneBook.jsx";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";
import { Home } from "pages/Home/Home.jsx";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "redux/auth/thunk";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const  isRefreshing  = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
     { isRefreshing ? <Loader/> :
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="registration" element={<RestrictedRoute redirectTo="/phone-book" component={<SignUp />} />}/>
            <Route path="log-in" element={<RestrictedRoute redirectTo="/phone-book" component={<LogIn />} />}/>
            <Route path="phone-book" element={<PrivateRoute redirectTo="/log-in" component={<PhoneBook />} />} />
            <Route path="*" element={<Home />}/>
          </Route>
        </Routes>
        
      </>}
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
    
      
  );
};