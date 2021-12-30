import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button class="btn btn-primary" onClick={() => setDataToEdit(el)}>Editar</button>
        <button  class="btn btn-danger"onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;