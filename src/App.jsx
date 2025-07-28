import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 w-full">
        <div className="max-w-screen-xl mx-auto w-full">
          Contenido principal
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
