import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import "./products.scss"
import { GridCheckIcon, GridCloseIcon, GridColDef } from "@mui/x-data-grid";

 const columns: GridColDef[] = [
   {
     field: "id",
     headerName: "ID",
     width: 90
   },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "noavatar.png"} alt="avatar" />
      }
    },
  
    
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: true,
    },
    {
      field: "color",
      headerName: "Color",
      width: 150,
      editable: true,
   },
     {
      field: "producer",
      headerName: "Producer",
      width: 150,
      editable: true,
   },
     {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
   },
      {
      field: "inStock",
      headerName: "Stock",
      width: 100,
        type: 'boolean',
      renderCell: (params)=> {
        return params.value? <GridCheckIcon style={{color:"green"}}/> : <GridCloseIcon style={{color:"red"}} />
      },
    },
    /* {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    }, */
 ];

const Products = () => {
  
    const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>
          <span>Add New Product</span>
          <img src="plus.svg" alt="" />
          </button>
      </div>
      <div className="grid">
        <DataTable slug="products" columns={columns } rows={products} />
      </div>
      {open && <Add setOpen={ setOpen} slug="product" columns={columns}/>}
    </div>
  );
}

export default Products