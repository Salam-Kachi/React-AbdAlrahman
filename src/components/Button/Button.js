const Button = ({ title }) => {
  return (
    <button
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: "lightgray",
        border: "1px solid #ccc",
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
