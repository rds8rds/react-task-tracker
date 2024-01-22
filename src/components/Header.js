import PropTypes from "prop-types"; // declaring many conditions about our props
import Button from "./Button";

const Header = ({ title, onShowAdd, buttonValue }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={buttonValue ? "crimson" : "green"}
        text={buttonValue ? "Close" : "Add"}
        onShowAdd={onShowAdd}
      />
    </header>
  );
};

// this has to be written below the function
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
