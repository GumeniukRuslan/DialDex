import { Toaster } from "react-hot-toast";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PhoneBook } from "pages/PhoneBook";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PhoneBook />}/>
          <Route path="registration" element={<SignUp />}/>
          <Route path="log-in" element={<LogIn />}/>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
      
  );
};