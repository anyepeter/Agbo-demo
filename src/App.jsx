import { Route, Routes } from "react-router-dom";


import SignIsn from "./pages/SignIn";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/HomePage";
import UsersProfile from "./pages/UserProfile/UserProfile";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import FilterSearch from "./pages/FilterSearch/FilterSearch";
import CategoryFilter from "./pages/CategoryFilter/CategoryFilter";

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
      <Route path="/profile" element={<UsersProfile />} />
      <Route path="/profile/profile" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/:title" element={<DetailsPage />} />
      <Route path="/filter/search/:data/results" element={<FilterSearch />} />
      <Route path="/filter/search/results" element={<CategoryFilter />} />
    </Routes>
    </>
  )
}

export default App
