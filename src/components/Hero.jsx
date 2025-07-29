import heroImage from "../assets/hero_image.jpg";
import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
const Hero = () => {
    return (
        <section className="bg-gradient-to-tr from-[#b7e4c7] via-[#f4acb7] to-[#e6ccb2] w-full py-6">
          <div className="flex items-start justify-between max-w-screen-xl mx-auto ">
            <div className="flex flex-col text-start w-6/12 leading-loose text-white">
              <h1 className="text-7xl font-semibold">
                Dulces Momentos, Sabores Únicos.
              </h1>
              <p className="text-2xl my-4">
                En Mel Pastelería creamos postres artesanales que endulzan tus
                celebraciones más especiales con amor y tradición familiar.
              </p>
              <div className="flex items-center justify-start">
                <button className="flex items-center justify-start bg-white hover:bg-gray-200 text-[#f4acb7] border-white hover:border-gray-200 border-1 rounded-xl p-2 w-40 cursor-pointer font-medium">
                  <ShoppingCartIcon className="h-6 w-6 text-[#f4acb7]" />
                  <p className="px-2">Ver Productos</p>
                </button>
                <button className="flex items-center justify-start bg-transparent hover:bg-white hover:text-[#f4acb7] mx-3 border-white border-2 rounded-xl p-2 w-40 cursor-pointer font-medium">
                 <PhoneIcon className="h-6 w-6"/>
                 <p className="px-2">Hacer Pedido</p>
                </button>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                width={350}
                height={350}
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
    )
}

export default Hero;