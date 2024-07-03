import Header from "./component/Header.tsx";
import Hero from "./component/Hero.tsx";
import Popular from "./component/Popular.tsx";
import Sofa from "./component/Sofa.tsx";
import Footer from "./component/Footer.tsx";
import Signup  from "./page/Signup.tsx";
import Store from "./page/Store.tsx";
import { Route, Routes } from "react-router-dom";
import "./css/App.css"
function App() {
  return (
    <Routes>
        <Route
          path="/"
          element={
    <>
      <Header />
      <Hero />
      <Popular />
      <Sofa />
      <Footer/>
    </>
          }/>
           <Route path="/Store" element={<Store />} />
           <Route path="/Signup" element={<Signup />} />
  </Routes>
  );
}

export default App;
