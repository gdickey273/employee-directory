import React from "react";

function Table(props) {
    return (
      <>
      {props.displayArray && 
      <table className="table">
        <thead>
          <tr>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
                First Name
              </th>
            </a>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
                Last Name
            </th>
            </a>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
                First Name
              </th>
            </a>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
                Job Title
              </th>
            </a>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
               Department
              </th>
            </a>
            <a href="#" onClick={props.sortArray}>
              <th scope="col">
                Email
              </th>
            </a>


          </tr>
        </thead>
      
        <tbody>
          {props.displayArray.map((member) => (
            <tr>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.jobTitle}</td>
              <td>{member.department}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
            </>
    )
}

export default Table;
