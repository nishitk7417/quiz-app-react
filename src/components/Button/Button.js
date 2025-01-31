import React from 'react'

const Button = ({ text, onClick}) => {
    return (
      <button 
        className="mt-6 inline-block bg-[rgb(202,25,144)] cursor-pointer border text-white py-2 px-6 rounded text-lg font-semibold hover:bg-purple-700 transition-all duration-300"
        onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button
