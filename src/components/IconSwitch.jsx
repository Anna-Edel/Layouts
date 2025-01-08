import PropTypes from "prop-types";

const IconSwitch = ({ icon, onSwitch }) => (
  <div className="icon-switch" onClick={onSwitch}>
    <span className="material-icons">{icon}</span>
  </div>
);

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
