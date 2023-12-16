import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
// import { EmailOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search... ." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11331357/pexels-photo-11331357.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
