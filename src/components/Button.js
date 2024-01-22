import PropTypes from "prop-types";

const Button = ({ color, text, onShowAdd }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onShowAdd}
      className="btn"
    >
      {text}
    </button>
  );
};

// defaultProps
Button.defaultProps = {
  color: "steelblue",
};

// propTypes
Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
