import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen";


export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});    
    const [loading, setLoading] = useState(true);

    const productosRecibidosBackEnd = [
      {
        id: "3444AX34",
        title: "Remera M/C",
        category: "Remeras",
        pictureUrl: "https://media.istockphoto.com/id/1323480815/es/foto/camiseta-de-la-marina.jpg?s=2048x2048&w=is&k=20&c=UzI8vTNz9S5rI9FYOZr3-FNsrEaGMTgvDk0uTNORcGA=",
        precio: "$3000",
        stock: 19
      },
      {
        id: "3615IC99",
        title: "Buzo Negro",
        category: "Buzo",
        pictureUrl: "https://media.istockphoto.com/id/1340904443/es/foto/maqueta-de-sudadera-con-capucha-de-gran-tama%C3%B1o-para-impresi%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=WtpJJAChl-cAAwMnWUn9Qh6aWasxDgmrOhjwOz-sNRA=",
        precio: "$5600",
        stock: 10
      },
      {
        id: "4543FC21",
        title: "Pantalon Marron",
        category: "Pantalon",
        pictureUrl: "https://media.istockphoto.com/id/510615049/es/foto/hombres-pantalones-de.jpg?s=2048x2048&w=is&k=20&c=RIjf5aWO9ZunctTbmS5-rYH4OTERjiuLbiOBbdErUPY=",
        precio: "$2000",
        stock: 20
      },
    ];

    const { productId } = useParams();

    const promesa = new Promise((res, rej) => {     
      setTimeout(() => {
        res(productosRecibidosBackEnd);
      }, 2000);  
    });
  
    useEffect(() => {
      promesa
        .then((prod) => {
          setProducto(prod.filter((producto) => producto.id == productId));
        })
        .catch(() => {
          console.log("Error, solicitud rechazada");
        }) 
        .finally(() => {
          setLoading(false);
        });

    }, []);    
  
    return(           
      <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ItemDetail id={producto[0].id} desc={producto[0].title} image={producto[0].pictureUrl} precio={producto[0].precio} stock={producto[0].stock} />
      )}
    </>
    )
}