import CardContainer from "./features/cards";
import GoogleMap from "./features/googleMap";
import SearchForm from "./features/searchForm";
import DetailPage from "./layout";
import Footer from "./layout/footer";
import { Header } from "./layout/header";

function App() {  
  return (
    <>
    <Header />
    <GoogleMap />
    <SearchForm />
    <CardContainer />
    <DetailPage />
    <Footer />
    </>
  )
}

export default App
