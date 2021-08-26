import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import GetAppIcon from "@material-ui/icons/GetApp";

import { Link, NavLink, Navlink, withRouter } from "react-router-dom";
import resumeData from "../../utilis/resumeData";
import { CustomButton } from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props.location.pathname;
  return (
    <Navbar className="header" expand="lg" sticky="top">
      <Nav.Link as={NavLink} to="/" className="p-0 m-0">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Protfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Protfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <a href={resumeData.downloadCv} target="_blank">
            <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
