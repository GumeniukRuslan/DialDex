import { Toaster } from "react-hot-toast";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PhoneBook } from "pages/PhoneBook";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="registration" element={<SignUp />}/>
          <Route path="log-in" element={<LogIn />}/>
          <Route path="phone-book" element={<PhoneBook />}/>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
      
  );
};