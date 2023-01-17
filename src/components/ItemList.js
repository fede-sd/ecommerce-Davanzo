import React from "react";
import {Item} from "./Item"

export const ItemList = ({productos}) => {

    return (
        <>
            {productos.map((producto,indice) => {
                return <Item id={producto.id} key={indice} title={producto.title} image={producto.pictureUrl}/>
            })}
        </>
  );
}