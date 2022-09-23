import React from "react";
import { Row, Col } from "reactstrap";
// import '../NavBar/NavBar.scss'
import logo from "../../Assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const roles = user ? user.roles.toString() : "";
  return (
    <div className="navbar-container">
      {user ? (
        <div className="NavBar">
          <Row className="Row_NavBar">
            <Col className="logo">
              <img src={logo} />

              <div className="link-wrap">
                {roles === "QTV" ? (
                  <div>
                    <ul className="nav">
                      <li><Link to = "/">
                      <FontAwesomeIcon icon={faHouse}/> HOME</Link></li>
                      <li><Link to = "/collaborator"> 
                      <FontAwesomeIcon icon={faUser} style={{marginRight:'5px'}}/>
                      QUẢN LÝ CỘNG TÁC VIÊN</Link></li>

                    </ul>
                    {/* <button className="btn btn-link" >
                      <Link to="/" className="link" >
                        HOME 
                      </Link>
                    </button>
                    <button className="btn btn-link">
                      <Link to="/collaborator" className="link" >
                        QUẢN LÝ CỘNG TÁC VIÊN 
                        </Link>
                    </button> */}
                  </div>
                ) : (
                  <div>
                    {/* <button className="btn btn-link">
                      <Link to="/" className="link">
                        Home</Link>
                    </button> */}
                     <ul className="nav">
                      <li><Link to = "/">
                      <FontAwesomeIcon icon={faHouse}/>
                        HOME</Link></li>

                    </ul>
                  </div>
                )}
              </div>
            </Col>
            <Col
              className="btn-login"
              // style={{
              //   display: "flex",
              //   justifyContent: "right",
              //   marginRight: "30px",
              //   height: "50px",
              // }}
            >
              <button
                type="button"
                className="btn btn-outline-primary ms-auto"
                style={{color:'white', border:'1px solid white'}}
                data-bs-toggle="modal"
                onClick={handleLogout}
                data-bs-target="#loginModal"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                Đăng xuất
              </button>
            </Col>
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default NavBar;
