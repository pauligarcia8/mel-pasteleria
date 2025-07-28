import AnchorButton from "../UI/AnchorButton";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto w-full">
      <div className="flex items-center">
        <img src="../../logo.png" width={60} height={60} />
        <h1 className="text-xl font-bold">Mel Pasteleria</h1>
      </div>
      <div className="flex items-center justify-between">
        <AnchorButton title="Productos" />
        <AnchorButton title="Galeria" />
        <AnchorButton title="Precios" />
        <AnchorButton title="Historia" />
        <AnchorButton title="Contacto" />
      </div>
    </nav>
  );
};

export default NavBar;
