/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRow from "../TableRow";

function Table(props) {
    return (
      <>
      {props.displayArray && 
      <table className="table">
        <thead>
          <tr>
  
            <th scope="col">
              <a href="#" data-camel-case="firstName" onClick={props.setArrayState}>
                First Name
              </a>
            </th>
            <th scope="col">
              <a href="#" data-camel-case="lastName" onClick={props.setArrayState}>
                Last Name
              </a>
            </th>
            <th scope="col">
              <a href="#" data-camel-case="jobTitle" onClick={props.setArrayState}>
                Job Title
              </a>
            </th>
            <th scope="col">
              <a href="#" data-camel-case="department" onClick={props.setArrayState}>
                Department
              </a>
            </th>
            <th scope="col">
              <a href="#" data-camel-case="email" onClick={props.setArrayState}>
                Email
              </a>
            </th>
            
            
            


          </tr>
        </thead>
      
        <tbody>
          {props.displayArray.map((memb) => (
            <TableRow member={memb} key={memb.email} />
          ))}
        </tbody>
      </table>
      }
            </>
    )
}

export default Table;
