import { Toaster } from "react-hot-toast";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PhoneBook } from "pages/PhoneBook";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PhoneBook />}/>
          {/* <Route path="movies" element={<Movies />}/> */}
          {/* <Route path="*" element={<Home/>}/> */}
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
      
  );
};