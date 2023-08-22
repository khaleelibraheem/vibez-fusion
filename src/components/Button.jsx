const Button = ({ name, onClick, style }) => {
  return <button onClick={onClick} style={style}>{name}</button>;
};

export default Button;
