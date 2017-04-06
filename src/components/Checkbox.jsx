import React from 'react';

function Checkbox(props) {
  return (
    <button className="checkbox icon">
      <i className="material-icons">check_box_outline_blank</i>
    </button>
  );
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired
};

export default Checkbox;
Button.jsx
import React from 'react';

function Button(props) {
  return (
    <button className={props.className}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
}

Button.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default Button;
