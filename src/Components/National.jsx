import React from 'react'
const National = (props) => {
  const { id, name, createdAt } = props.obj

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{createdAt}</td>
    </tr>
  )
}

export default National
