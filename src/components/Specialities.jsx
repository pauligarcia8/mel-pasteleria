import Card from "../UI/Card";
import Title from "./Title";

const Specialities = () => {
  return (
    <section className=" max-w-screen-xl mx-auto w-full py-20">
      <Title
        title="Nuestras Especialidades"
        body="Descubre nuestra variedad de productos artesanales"
      />
      <div className="flex items-center justify-between py-10">
        <Card
          icon="cake"
          title="Tortas"
          body="Encontralas en 3 tamaños: Monoporción, torta de 15 porciones y torta de 25 porciones"
        />
        <Card
          icon="heart"
          title="Reposteria diaria"
          body="Desde cookies, madeleine hasta bizcochuelos o minipostres, date el gusto cualquier momento del dia"
        />
        <Card
          icon="gift"
          title="Momentos especiales"
          body="Regala amor y dulzura. Tortas personalizadas o desayunos en distintos tamaños"
        />
      </div>
    </section>
  );
};

export default Specialities;
