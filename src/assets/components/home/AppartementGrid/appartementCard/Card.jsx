import "./Card.scss"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Card(props) {
  console.log(props.id)

  return (
    <Link to="/logement" className="Card" state={{ apartementId: props.id }}>
      <img src={props.picture} alt="" />
      <div className="Title">{props.title}</div>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  id: PropTypes.string
}

export default Card