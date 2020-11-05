import React from "react";

function TableRow(props) {
  const member = props.member
  return (
    <tr>
      <td>{member.firstName}</td>
      <td>{member.lastName}</td>
      <td>{member.jobTitle}</td>
      <td>{member.department}</td>
      <td>{member.email}</td>
    </tr>
  )
}

export default TableRow;