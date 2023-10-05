import "./Appartgrid.scss";
import Apartement from "./appartementCard/Card";
import { useAppart } from "../../../hook/useAppart";


function Appartgrid() {
  const appartement = useAppart();
    return (
      <div className="Grille">
        {appartement.map((apartement) => (
          <Apartement
            key={apartement.id}
            title={apartement.title}
            picture={apartement.cover}
            id={apartement.id}
          />
        ))}
      </div>
    );
  }

  export default Appartgrid