// import components
import PropTypes from "prop-types";
// import styles
import "./embed.scss";

// youtube embed component
function Embed({embedSrc}) {
  return (
    <div className="embed">
      <embed className="embed__source"
            src={`https://www.youtube.com/embed/${embedSrc}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="olivia williams inspirational video"
        />
    </div>
  );
}

Embed.propTypes = {
  embedSrc: PropTypes.string.isRequired
};

// export component
export default Embed;
