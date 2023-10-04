import "./Banner.css"
import PropTypes from "prop-types"
import { useState } from "react"

function Banner(props) {
    const pictures = props.image;

    const [currentPic, setCurrentPic] = useState(0);

    const getClassName = (i) => {
        if (i === currentPic) return "active";
    };

    const MoveNext = () => {
        if (currentPic === pictures.length - 1) {
            setCurrentPic(0);
        } else {
            setCurrentPic(currentPic + 1);
        }
    };

    const MovePrev = () => {
        if (currentPic === 0) {
            setCurrentPic(pictures.length - 1);
        } else {
            setCurrentPic(currentPic - 1);
        }
    };

    return (
        <div className="img-banner">
            <button className={pictures.length == 1 ? "prev hidden" : "prev"} onClick={ MovePrev }>&#x276E;</button>
            <button className={pictures.length == 1 ? "next hidden" : "next"} onClick={ MoveNext }>&#x276F;</button>
            { pictures.map((pic, i) => <img src={pic} key={pic} className={ getClassName(i)}/>)}
            <span className={pictures.length == 1 ? "hidden" : ""}> {currentPic + 1} / {pictures.length} </span>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.array
}

export default Banner