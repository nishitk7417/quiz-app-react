import React from 'react'

const Button = ({ text, onClick, disabled}) => {
    return (
      <button 
        className="mt-6 inline-block bg-fuchsia-900 cursor-pointer border text-white py-2 px-6 rounded text-lg font-semibold hover:bg-fuchsia-400 transition-all duration-300"
        onClick={onClick}
        disabled={disabled}>
        {text}
      </button>
    );
  };

  Button.defaultProps = {
    text: 'Click Me',
    onClick: () => alert('Button clicked!'),
    disabled: false,
  };
export default Button
