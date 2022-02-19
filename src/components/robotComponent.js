const Robot = ({ robot: { imagen, name, fecha, resistencia, velocidad } }) => {
  return (
    <li>
      <h3>{name}</h3>
      <img src={imagen} alt="ejemplo" />
      <div>
        <p>Resistencia: {resistencia}</p>
        <p>Velocidad: {velocidad}</p>
        <p>{fecha}</p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Robot;
