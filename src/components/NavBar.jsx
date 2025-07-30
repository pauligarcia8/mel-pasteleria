import NavButton from "../UI/NavButton";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto w-full py-4">
      <div className="flex items-center">
        <img src="../../logo.png" width={60} height={60} />
        <h1 className="text-xl font-bold">Mel Pasteleria</h1>
      </div>
      <ul className="flex items-center justify-between">
        <li>
          <NavButton title="Productos" />
        </li>
        <li>
          <NavButton title="Galeria" />
        </li>
        <li>
          <NavButton title="Precios" />
        </li>
        <li>
          <NavButton title="Historia" />
        </li>
        <li>
          <NavButton title="Contacto" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
