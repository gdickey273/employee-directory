/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Table(props) {
    return (
      <>
      {props.displayArray && 
      <table className="table">
        <thead>
          <tr>
            
            <th scope="col">
              <a href="#" onClick={props.sortArray}>
                First Name
              </a>
            </th>
            <th scope="col">
              <a href="#" onClick={props.sortArray}>
                Last Name
              </a>
            </th>
            <th scope="col">
              <a href="#" onClick={props.sortArray}>
                Job Title
              </a>
            </th>
            <th scope="col">
              <a href="#" onClick={props.sortArray}>
                Department
              </a>
            </th>
            <th scope="col">
              <a href="#" onClick={props.sortArray}>
                Email
              </a>
            </th>
            
            
            


          </tr>
        </thead>
      
        <tbody>
          {props.displayArray.map((member) => (
            <tr scope="row">
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
