import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Transparencia.css";
import { useTransparencia } from "../../hooks";
import Busqueda from "../../components/Busqueda/Busqueda";

export const Transparencia = () => {
  const { datos } = useTransparencia();

  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (datos.length > 0) {
      setResultados(datos[0]);
    }
  }, [datos]);

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
    const datosFiltrados = datos[0].filter((item) =>
      item.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setResultados(datosFiltrados);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Barra de búsqueda */}
        <Busqueda busqueda={busqueda} onSearch={handleBusqueda} />
        <div className="rubros_titulo">
          <h2>Articulo 69 Ley de Transparencia (48 Rubros)</h2>
        </div>
        {resultados.map((item, index) => (
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
                  alt={item.nombre}
                />
              </div>
              <h3>{item.nombre}</h3>
            </div>
          </Link>
        ))}

        {/* Enlace adicional */}
        <Link className="rubros_historicos" to="RubrosHistoricos">
          Información Ejercicios Anteriores Art. 69 (48 Fracciones)
        </Link>
      </div>
    </div>
  );
};
