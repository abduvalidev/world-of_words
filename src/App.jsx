import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Background from "./components/Background";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="relative z-20">
        <Header />
        <Main>
        </Main>
        <Footer />
      </div>
      <Background />
    </div>
  );
}
 
export default App;
