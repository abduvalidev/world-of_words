import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Background from "./components/Background";

function App() {
  const apiUrl = "https://dev.api.worldwords.io/web/main/books?lang=ru";
  return (
    <div className="App">
      <div className="relative z-20">
        <Header />
        <Main>
        </Main>
        <Footer apiUrl={apiUrl} />
      </div>
      <Background />
    </div>
  );
}
 
export default App;
