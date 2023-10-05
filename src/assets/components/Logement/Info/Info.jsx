import "./Info.scss"
import PropTypes from "prop-types"

function Info(props) {
  return (
    <div className="info-appart">
    <h1>{props.title}</h1>
    <h2>{props.location}</h2>
    <div className="tags-appart">
      {props.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
</div>
  )
}

Info.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.array,
    tag: PropTypes.arrayOf(PropTypes.string)
}

export default Info