import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows  } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTableProduct = () => {
  const [dataProduct, setDataProduct] = useState(productRows);

  const handleDelete = (id) => {
    setDataProduct(dataProduct.filter((item) => item.id !== id));
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
        Add New Product
        <Link to="/products/new" className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataProduct}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableProduct;
