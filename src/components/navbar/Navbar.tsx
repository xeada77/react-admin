import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/15591154/pexels-photo-15591154/free-photo-of-nieve-ciudad-moda-rojo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar