import Body from "./molecules/body";
import Corousel from "./molecules/corousel";
import Footer from "./molecules/footer";
import FooterBar from "./molecules/footerBar";
import HeadingBar from "./molecules/headingBar";
import NavBar from "./molecules/navBar";

function App() {
  return (
    <div className="App">
      <HeadingBar />
      <NavBar />
      <Corousel />
      <Body />
      <Footer />
      <FooterBar />
    </div>
  );
}

export default App;
