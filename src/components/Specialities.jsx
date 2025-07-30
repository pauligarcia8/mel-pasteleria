import Card from "../UI/Card";

const Specialities = () => {
  return (
    <section className=" max-w-screen-xl mx-auto w-full py-20">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Nuestras Especialidades</h1>
            <p className="text-2xl text-gray-700 font-semibold">Descubre nuestra variedad de productos artesanales</p>
        </div>
        <div className="flex items-center justify-between py-10">
            <Card icon="cake" title="Tortas" body="Encontralas en 3 tamaños: Monoporción, torta de 15 porciones y torta de 25 porciones"/>
            <Card icon="heart" title="Reposteria diaria" body="Desde cookies, madeleine hasta bizcochuelos o minipostres, date el gusto cualquier momento del dia"/>
            <Card icon="gift" title="Momentos especiales" body="Regala amor y dulzura. Tortas personalizadas o desayunos en distintos tamaños"/>
        </div>
    </section>
  );
};

export default Specialities;
