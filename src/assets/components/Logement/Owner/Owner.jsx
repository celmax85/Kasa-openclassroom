import "./Owner.css"
import PropTypes from "prop-types"

function Owner(props) {

    const name = props.name.split(" ");
    return (
        <div className="owner-appart">
            <div className="owner-appart-info">
                <h3><span>{name[0]}</span><span>{name[1]}</span></h3>
                <div className="profile-picture">
                    <img src={props.picture} alt="" />
                </div>
            </div>
            <div className="appart-owner-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className={props.stars >= star ? "fas fa-star on" : "far fa-star"}></i>
                ))}
            </div>
        </div>
    )
}

Owner.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    stars: PropTypes.string
}

export default Owner