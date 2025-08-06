import meli from "../assets/meli.jpg";

const OurHistory = () => {
  return (
    <section className="min-h-screen flex items-start max-w-screen-xl mx-auto w-full py-20 gap-6">
      <img src={meli} width={500} height={500} className="rounded-xl" />
      <div>
        <p className="text-2xl text-gray-700 font-semibold">
          Desde chica la pastelería formó parte de mi vida como sinónimo de dar
          amor. Mi mamá, mi hermana y yo siempre preparábamos postres para
          compartir en eventos familiares y también para regalar a seres
          queridos porque “hecho a mano” significó siempre un nivel más de
          cariño en ese regalo. Y se trataba de pastelería porque es lo que nos
          hace felices a todos en mi familia, sabemos que disfrutar de algo
          dulce siempre alegra el corazón.
        </p>
        <p className="text-2xl text-gray-700 font-semibold my-4">
          Mi papá y mi hermano, soñadores de vocación, aportaron la motivación
          que faltaba para animarme a emprender confiando ciegamente en lo que
          deseo e imagino.
        </p>
        <p className="text-2xl text-gray-700 font-semibold my-4">
          Una vez que me formé profesionalmente, tuve las herramientas para
          incluir en Mel un estilo propio y llevar mi identidad desde lo
          familiar hacia lo profesional. Sin dejar de lado los valores iniciales
          pero sumando un toque de detalle y personalidad.
        </p>
        <p className="text-2xl text-gray-700 font-semibold my-4">
          Desde ese lugar es que nace Mel Pastelería, un emprendimiento personal
          en el que puedo plasmar la filosofía familiar de dar amor, disfrutar
          mucho de lo dulce y atrevernos a soñar.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-center text-[#f4acb7]">
              8+
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">
              Años de experiencia
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-center text-[#f4acb7]">
              5000+
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">
              Tortas creadas
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-center text-[#f4acb7]">
              500+
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">
              Clientes felices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
