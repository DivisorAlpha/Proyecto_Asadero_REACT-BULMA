import "../css/Reservas.css";
import polloRegal from "../Img/polloRegalo.png";

const Reservas = () => {
  return (
    <div className="container">
      <div className="box1">
        {/* Primer contenedor del lado izquierdo */}
        <div className="content">
          <h2 className="title">
            Comparte Tu Cumpleaños con Asadero <br />
            <span>EL GALLITO</span>
          </h2>
          <div className="media">
            <img src={polloRegal} alt="Pollo de regalo" className="image" />
            <div className="text">
              <h3 className="subtitle">
                Para el cumpleañero <span>Una pierna</span>
              </h3>
              <h2 className="description">¡¡ TOTALMENTE GRATIS !!</h2>
            </div>
          </div>
          <button className="btn">Reservas Mesa</button>
        </div>
        {/* Segundo contenedor del lado izquierdo */}
        <div className="content">
          <h2 className="title">
            Comparte Tu Cumpleaños con Asadero <br />
            <span>EL GALLITO</span>
          </h2>
          <div className="media">
            <img src={polloRegal} alt="Pollo de regalo" className="image" />
            <div className="text">
              <h3 className="subtitle">
                Para el cumpleañero <span>Una pierna</span>
              </h3>
              <h2 className="description">¡¡ TOTALMENTE GRATIS !!</h2>
            </div>
          </div>
          <button className="btn">Reservas Mesa</button>
        </div>
      </div>

      <div className="box2">
        <h2>
          Bardi <span>El pollo</span> para niños.
        </h2>

        <form>
          <div className="field">
            <label className="label">Nombre de reserva</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Nombre"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Número de personas</label>
            <div className="control">
              <input
                className="input"
                type="number"
                min="1"
                max="10"
                placeholder="1"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Fecha de reserva</label>
            <div className="control">
              <input className="input" type="date" required />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary">Reservar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservas;
