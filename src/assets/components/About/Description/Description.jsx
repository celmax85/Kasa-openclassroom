import "./DescriptionAbout.scss"
import PropTypes from "prop-types"
import { useState } from "react"

function Description(props) {
    const [iscontentvisible, setIscontentvisible] = useState(false);

    const showContent = () => {
        setIscontentvisible(!iscontentvisible);
    }

    const contentClass = (iscontentvisible ? "visible" : "hidden") + " about-info";
    const chevronClass = (iscontentvisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
    const AppartClass = (iscontentvisible ? "visible" : "hidden") + " about-content";

    return (
        <div className={AppartClass}>
            <p className="about-title" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    )
}

Description.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

export default Description