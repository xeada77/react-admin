import Single from "../../components/single/Single"
import "./user.scss"
import { singleUser } from "../../data"

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  )
}

export default User