
import React from 'react';
import './SongComponent.css'; 

// Definición del componente SongComponent, El componente acepta tres props: id, title y variants

export const SongComponent = ({ id, title, variants }) => {

return (
    <>{/*se crea la tabla para mostrar los datos*/}    
    
<table className="variants-table">
  
    <thead>
    <br /> 
        <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Nivel de Existencias </th>
        </tr>

    </thead>

    <tbody>
{/* Se Utiliza el método map para iterar sobre cada elemento de variants en este caso el que necesitamos es la cantidad de inventario */}
            {variants.map((variant, index) => (
            <tr key={index}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{variant.inventory_quantity}</td>
            </tr>
          ))}
         
    </tbody>
    </table>
    </>
  );
};