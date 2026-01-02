import { AgGridReact } from "ag-grid-react";
import React from "react";

const CamsOnlineAgGrid = ({ rowData }) => {
  const columnDefs = [
    { headerName: "Scheme Code", field: "schemeCode" },
    { headerName: "Scheme Name", field: "schemeName" },
    { headerName: "Fund House", field: "fundHouse" },

    { headerName: "Scheme Name", field: "schemeName" },
  ];

  console.log(rowData);

  return (
    <div className="container-fluid d-flex flex-column">
      <div className="p-4 d-flex justify-content-center">
        Cams Online using AG-Grid
      </div>
      <div style={{ height: "90vh" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={20}
        />
      </div>
    </div>
  );
};

export default CamsOnlineAgGrid;
