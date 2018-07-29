import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';


export default function (props) {
  function renderTitles() {
    console.log(props);
    return (
      <tr>
        <th scope="col">#</th>
        <th scope="col">URN</th>
        <th scope="col">Code Name</th>
        <th scope="col">Name</th>
        <th scope="col">Unit Type</th>
        <th scope="col">Unit Echelon</th>
      </tr>
    )
  }

  function renderEntries() {
    var urn;
    var i = 0;
    return _.map(props, entry => {
      i++;
      return (
        <tr key={i + "tr"}>
          <th key={i + "row"} scope="row">{i}</th>
          <td key={entry.urn}> {entry.urn}</td>
          <td key={entry.urn + entry.codeName}> {entry.codeName}</td>
          <td key={entry.urn + entry.name}> {entry.name}</td>
          <td key={entry.urn + entry.unitType}> {entry.unitType}</td>
          <td key={entry.urn + entry.unitEchelon}> {entry.unitEchelon}</td>

          <td>
            <Link key={'modify' + entry.urn} type="button" className="btn btn-secondary" to={`/modify/${entry.urn}`}>
              Modify</Link>
          </td>
          <td>
            <Link key={'delete' + entry.urn} type="button" className="btn btn-danger" to={`/delete/${entry.urn}`}>
              Delete</Link>
          </td>

        </tr >
      )
    })
  }

  return (
    <table className="table">
      <thead>
        {renderTitles()}
      </thead>
      <tbody>
        {renderEntries()}
      </tbody>
    </table>
  )

}

