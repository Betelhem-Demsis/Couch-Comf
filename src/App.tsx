import Header from "./component/Header.tsx";
import Hero from "./component/Hero.tsx";
import Popular from "./component/Popular.tsx";
import Sofa from "./component/Sofa.tsx";
import Footer from "./component/Footer.tsx";
import "./css/App.css"
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sofa />
      <Popular />
      <Footer/>
    </>
  );
}

export default App;
