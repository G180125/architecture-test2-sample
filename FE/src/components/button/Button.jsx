const Button = ({ buttonType, title, handler }) => {

  const buttonStyles = {
      positive: "bg-blue-700 hover:bg-blue-800 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
      normal: "bg-gray-300 hover:bg-gray-400 text-gray-800"
  };

  const styleClass = buttonStyles[buttonType] || buttonStyles.normal;

  return (
      <button 
          className={`w-full font-medium rounded-lg px-5 py-2.5 ${styleClass}`}
          onClick={handler}
      >
          {title}
      </button>
  );
};

export default Button;
