import frambu from "../assets/frambu.jpg";
import breakfast_1 from "../assets/breakfast_1.jpg";
import bakery from "../assets/bakery.jpg";
import almond from "../assets/almond.jpg";
import coffee from "../assets/coffee.jpg";
import breakfast_2 from "../assets/breakfast_2.jpg";
import mono from "../assets/mono.jpg";
import lemon from "../assets/lemon.jpg";
import Title from "./Title";

const images = [
  { src: frambu, alt: "A delicious, strawberry cake" },
  { src: breakfast_1, alt: "A delicious, breakfast" },
  { src: bakery, alt: "A diverse bakery" },
  { src: mono, alt: "A delicious mono cake" },
  { src: almond, alt: "Tasty almonds" },
  { src: lemon, alt: "A delicious lemon cake" },
  { src: coffee, alt: "Coffee and something sweet" },
  { src: breakfast_2, alt: "A delicious, breakfast" },
];

const Gallery = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full py-20">
      <Title
        title="Galeria de Productos"
        body="Una muestra de nuestras deliciosas creaciones"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
