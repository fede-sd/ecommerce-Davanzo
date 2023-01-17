import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";


export const ItemListContainer = (greeting) => {
  const productosRecibidosBackEnd = [
    {
      id: "3444AX34",
      title: "Remera M/C",
      category: "Remeras",
      pictureUrl: "https://media.istockphoto.com/id/1323480815/es/foto/camiseta-de-la-marina.jpg?s=2048x2048&w=is&k=20&c=UzI8vTNz9S5rI9FYOZr3-FNsrEaGMTgvDk0uTNORcGA=",
    },
    {
      id: "3615IC99",
      title: "Buzo Negro",
      category: "Buzo",
      pictureUrl: "https://media.istockphoto.com/id/1340904443/es/foto/maqueta-de-sudadera-con-capucha-de-gran-tama%C3%B1o-para-impresi%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=WtpJJAChl-cAAwMnWUn9Qh6aWasxDgmrOhjwOz-sNRA=",
    },
    {
      id: "4543FC21",
      title: "Pantalon Marron",
      category: "Pantalon",
      pictureUrl: "https://media.istockphoto.com/id/510615049/es/foto/hombres-pantalones-de.jpg?s=2048x2048&w=is&k=20&c=RIjf5aWO9ZunctTbmS5-rYH4OTERjiuLbiOBbdErUPY=",
    }, 
  ];


  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  const promesa = new Promise((res, rej) => {    
      res(productosRecibidosBackEnd);
  });

  useEffect(() => {
    promesa
      .then((prods) => {        
        if (categoryId) {
          setProductos(
            prods.filter((producto) => producto.category == categoryId)
          );
        } else {
          setProductos(prods);
        }
      })
      .catch(() => {
        console.log("Error, solicitud rechazada");
      });
  }, [categoryId]);


  return (    
    <ItemList
    productos={productos}
  ></ItemList>
  );
}