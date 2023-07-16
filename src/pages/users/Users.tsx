import { GridCheckIcon, GridCloseIcon, GridColDef} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import {userRows} from "../../data"
import { useState } from "react";
import Add from "../../components/add/Add";

 const columns: GridColDef[] = [
   {
     field: "id",
     headerName: "ID",
     width: 90
   },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "noavatar.png"} alt="avatar" />
      }
    },
  
    
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
   },
     {
      field: "phone",
      headerName: "Phone",
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
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
   },
      {
      field: "verified",
      headerName: "Verified",
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
  


const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>
          <span>Add New User</span>
          <img src="plus.svg" alt="" />
          </button>
      </div>
      <div className="grid">
        <DataTable slug="users" columns={columns } rows={userRows} />
      </div>
      {open && <Add setOpen={ setOpen} slug="user" columns={columns}/>}
    </div>
  );
};

export default Users;
