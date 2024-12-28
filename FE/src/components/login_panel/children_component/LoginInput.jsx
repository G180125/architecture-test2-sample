const LoginInput = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default LoginInput;
