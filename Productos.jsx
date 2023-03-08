import React, { useState } from 'react'



export const Productos = () => {
    


 
const [Productos,setProductos]=useState([])
const [nombrex,setnombrex]=useState("");
const [preciox,setpreciox]=useState(0);
const [total,setotal]=useState();

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
const AddProduct=(p)=>{
  setProductos(list=>[...list,{nombre:nombrex,precio:preciox}])
   setotal(total+ p.precio)
  
  
}
const creartabla=()=>{

   
}

  return (
    <>
    <h1>PRODUCTOS</h1>
    <input type="nombre" 
    placeholder='ingrese el nombre '
    value ={nombrex}onChange={(event)=>handleEventn(event)} />
    <input type="precio"  
    placeholder='ingrese el precio'
    value ={preciox} onChange={(event)=>handleEventp(event)} />
   
    <button onClick={()=> AddProduct(Producto)}>Add Producto</button>
    <button onClick={()=> creartabla()}> listar</button>

    <ol>
        {
            Productos.map(
                (Producto,key)=>{
                    return <li key ={key}> 
                    Producto: {Producto.nombre} // Precio: {Producto.precio}
                     </li>
                }
            )
        }
    </ol>
    <h1>Total: {total} </h1>


    </>
    
    
  )
}
