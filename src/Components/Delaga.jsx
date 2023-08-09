import React from "react";
const Delega = (props) => {
    const { id, name, nameAr, status, createdAt, govName} = props.obj;


    return (
        <tr>
            <td>{id}</td>
          <td>{name}</td>
            <td>{nameAr}</td>
            <td>{status}</td>
            <td>{createdAt}</td>
            <td>{govName}</td>
          
        </tr>

    );
};

export default Delega;    