import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <div className="grid">
        <DataTable />
      </div>
    </div>
  );
};

export default Users;
