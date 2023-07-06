import { Toaster } from "react-hot-toast";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PhoneBook } from "pages/PhoneBook";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";
import { Home } from "pages/Home";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="registration" element={<RestrictedRoute redirectTo="/phone-book" component={<SignUp />} />}/>
          <Route path="log-in" element={<RestrictedRoute redirectTo="/phone-book" component={<LogIn />} />}/>
          <Route path="phone-book" element={<PrivateRoute redirectTo="/log-in" component={<PhoneBook />}/>}/>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
      
  );
};