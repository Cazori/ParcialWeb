import React, { useState } from 'react'



export const Productos = () => {
    


 
const [Productos,setProductos]=useState([])
const [nombrex,setnombrex]=useState("");
const [preciox,setpreciox]=useState("");

const handleEventn=(e)=>{
setnombrex(e.target.value)
}
const handleEventp=(e)=>{
    setpreciox(e.target.value)
    }
   const Producto = {
        nombre: nombrex,
        precio: preciox
      }
const AddProduct=()=>{
  setProductos(list=>[...list,Producto,{nombre:nombrex,precio:preciox}])
  
}
const creartabla=()=>{
    //este metodo crea un tabla(deberia) xD
}

  return (
    <>
    <h1>Productos</h1>
    <input type="nombre" 
    placeholder='ingrese el nombre '
    value ={nombrex}onChange={(event)=>handleEventn(event)} />
    <input type="precio"  
    placeholder='ingrese el precio'
    value ={preciox} onChange={(event)=>handleEventp(event)} />
   
    <button onClick={()=> AddProduct()}>Add Producto</button>
    <button onClick={()=> creartabla()}> listar</button>1

    <ol>
        {
            Productos.map(
                (Producto,key)=>{
                    return <li key ={key}> 
                    {Producto} </li>
                }
            )
        }
    </ol>


    </>
    
    
  )
}
