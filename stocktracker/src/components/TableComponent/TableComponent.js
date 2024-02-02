/** @format */

import React from "react";

const TableComponent = ({ data }) => {
  return (
    <table
      style={{
        width: "80%",
        margin: "20px auto",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
      border="1"
    >
      <thead>
        <tr>
          <th style={{ padding: "10px" }}></th>
          <th style={{ padding: "10px" }}>Maximum</th>
          <th style={{ padding: "10px" }}>Minimum</th>
          <th style={{ padding: "10px" }}>Average</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={{ padding: "10px" }}>{row[0]}</td>
            <td style={{ padding: "10px" }}>{row[1]}</td>
            <td style={{ padding: "10px" }}>{row[2]}</td>
            <td style={{ padding: "10px" }}>{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
