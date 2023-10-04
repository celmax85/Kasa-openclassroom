import "./Error.css"
import Navbar from "../../assets/components/Navbar/Navbar"
import Footer from "../../assets/components/Footer/Footer"
import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="error-container">
            <Navbar />
            <main className="error-content">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
                <Link to={"/"}>Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </div>
    )
}

export default Error