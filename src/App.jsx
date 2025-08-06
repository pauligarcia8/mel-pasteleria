import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import Gallery from "./components/Gallery";
import OurHistory from "./components/OurHistory";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 w-full">
        <Hero />
        <Specialities />
        <Gallery />
        <OurHistory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
