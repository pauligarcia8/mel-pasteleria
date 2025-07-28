import List from "../UI/List";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-auto w-full">
      <div className="flex items-start justify-between max-w-screen-xl mx-auto w-full">
        <div className="w-2xs">
          <div className="flex items-center justify-start">
            <img src="../../logo.png" width={60} height={60} />
            <h1 className="text-lg">Mel Pasteleria</h1>
          </div>
          <p className="text-left text-gray-400">Endulzando momentos especiales con amor y tradición desde 2015.</p>
        </div>
        <List
          title="Productos"
          item1="Tortas Personalizadas"
          item2="Madeleine"
          item3="Cookies"
          item4="Budines"
        />
        <List
          title="Servicios"
          item1="Pedidos Personalizadas"
          item2="Entrega a Domicilio"
          item3="Eventos Especiales"
          item4="Catering"
        />
        <List
          title="Contacto"
          item1="Av.Principal 123"
          item2="+549123456789"
          item3="info@melpasteleria.com"
          item4="Lun a Sab 08am - 20pm"
        />
      </div>
      <div className="border-t border-gray-700 my-4" />
    <p className="text-center text-gray-400">© 2025 Mel Pastelería. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
