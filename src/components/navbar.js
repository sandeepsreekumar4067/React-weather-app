import '../Style/navbar.css'
const NavBar = () => {
    return (
        <div className="navbar-body">
            <div className="title">Weather App</div>
            <div className="navbar-contents">
                <div className="home">Home</div>
                <div className="map">Map</div>
                <div className="contact">Contact</div>
            </div>
        </div>
      );
}
 
export default NavBar;