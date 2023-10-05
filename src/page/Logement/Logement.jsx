import "./Logement.scss";

import Description from "../../assets/components/Logement/Description/Description";
import Banner from "../../assets/components/Logement/Banner/Banner";
import Info from "../../assets/components/Logement/Info/Info";
import Owner from "../../assets/components/Logement/Owner/Owner";

import { useAppartPage } from "../../assets/hook/useAppartPage";

function Logement() {
    const selectAppart = useAppartPage();

    if (selectAppart == null) return <div>loading...</div>;


    return (
        <main className="appart-container">
            <Banner
                image={selectAppart.pictures}
            />
            <div className="appart-head">
                <Info
                    title={selectAppart.title}
                    location={selectAppart.location}
                    tags={selectAppart.tags}
                />
                <Owner
                    picture={selectAppart.host.picture}
                    name={selectAppart.host.name}
                    stars={selectAppart.rating}
                />
            </div>
            <div className="description-content">
                <Description 
                    title="Description"
                    content={selectAppart.description}
                />
                <Description 
                    title="Équipements"
                    content={selectAppart.equipments.map((equip => (<li key={equip}>{equip}</li>)))}
                />
            </div>
        </main>
    );
}

export default Logement;
