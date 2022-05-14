import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { coachColumns, coachRows  } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTableCoach = () => {
  const [dataCoach, setDataCoach] = useState(coachRows);

  const handleDelete = (id) => {
    setDataCoach(dataCoach.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Coach
        <Link to="/coachs/new" className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataCoach}
        columns={coachColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableCoach;
