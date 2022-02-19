import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Robots = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch()
  })

  return (
    <ul>
      {robots.map((robot)=>(

      ))}
    </ul>
  )
};

export default Robots;
