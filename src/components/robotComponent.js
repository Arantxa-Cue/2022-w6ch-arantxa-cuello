const Robot = ({ robot: { imagen, name, fecha, resistencia, velocidad } }) => {
  return (
    <li>
      <p>{name}</p>
      <img src={imagen} alt="ejemplo" />
      <p>{fecha}</p>
      <p>Resistencia: {resistencia}</p>
      <p>Velocidad: {velocidad}</p>
      <button>Delete</button>
    </li>
  );
};

export default Robot;
