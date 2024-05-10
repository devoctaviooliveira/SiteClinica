import { Card } from ".";
import { arrayDeObjetos } from "./array";


export function CardList({position}) {

  const itemToShow = arrayDeObjetos[position]

  return (
    <>
      {position !== undefined ? <Card name={itemToShow.name} comment={itemToShow.comment}/> : arrayDeObjetos.map((objeto) => (
        <Card name={objeto.name} comment={objeto.comment} />
      ))}
    </>
  );
}