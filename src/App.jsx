import { Route, Routes } from "react-router-dom";
import CardContainer from "./features/cards";
import GoogleMap from "./features/googleMap";
import SearchForm from "./features/searchForm";
import DetailPage from "./layout";
import Footer from "./layout/footer";
import { Header } from "./layout/header";

import SignIsn from "./pages/SignIn";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/HomePage";

function App() {  
  return (
    <>
    {/* <Header />
    <GoogleMap />
    <SearchForm />
    <CardContainer />
    <DetailPage />
    <Footer /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIsn />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
