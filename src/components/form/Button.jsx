import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, clickAction, customClass } = props;
  const handleClick = () => {
    console.log(`Click interno del botón`);
    clickAction();
  };

  const buttonClass = `
    ${customClass}
    text-cyan-50
    rounded-sm
    hover:bg-cyan-100
    hover:text-cyan-800
    hover:border-0
    focus:outline-none
    focus:bg-white
    focus:text-cyan-800
  `;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clickAction: PropTypes.func,
  customClass: PropTypes.string,
};

export default Button;
