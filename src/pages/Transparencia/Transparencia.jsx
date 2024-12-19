import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Transparencia.css";
import { rubros } from "../../json/rubros";
import Busqueda from "../../components/Busqueda/Busqueda";


export const Transparencia = () => {
  const { datos } = useTransparencia();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [busqueda, setBusqueda] = useState("");
  const [filteredRubros, setFilteredRubros] = useState(rubros);

  const handleSearch = (searchTerm) => {
    setBusqueda(searchTerm);
    const filtered = rubros.filter((item) =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRubros(filtered);
  };

  return (
    <div className="container">
      <div className="row">
        <Busqueda busqueda={busqueda} onSearch={handleSearch} />
        <div className="rubros_titulo">
          <h2>Articulo 69 Ley de Transparencia (48 Rubros)</h2>
        </div>
        {filteredRubros.map((item, index) => (
          <Link
            key={index}
            to={`/Transparencia/Rubros/${item.nombre}`}
            className="col-md-4 col-sm-6 col-12 rubro_enlace"
          >
            <div className="rubro_container">
              <div className="rubro_icono">
                <img
                  src={
                    "http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/" +
                    item.icono
                  }
                />
              </div>
              <h3>{item.nombre}</h3>
            </div>
          </Link>
        ))}
        <Link className="rubros_historicos" to="RubrosHistoricos">
          Información Ejercicios Anteriores Art. 69 (48 Fracciones)
        </Link>
      </div>
    </div>
  );
};

