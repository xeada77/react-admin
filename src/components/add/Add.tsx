import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
    slug: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    columns:GridColDef[]
}

const Add = (props: Props) => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()    
        console.log("Submit")
      }

    return (
      
      <div className="add">
          <div className="modal">
              <span className="close" onClick={() => props.setOpen(false)}>X</span>
              <h1>Add new {props.slug}</h1>
              <form onSubmit={handleSubmit}>
                  {props.columns.filter((item) =>
                      (item.field !== "id" && item.field !== "img")).                     
                      map(column => (
                      <div className="item" key={column.field}>
                          <label>{column.headerName}</label>
                          <input type={column.type} placeholder={column.field } />
                      </div>
                      ))}
                    <button>Send</button>
              </form>
          </div>
    </div>
  )
}

export default Add  