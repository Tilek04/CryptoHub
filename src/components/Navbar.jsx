import React from "react";
import { Button, Typography, Menu, Avatar } from "antd";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";

const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="logo-nav">
        <Avatar src={icon} size="large"  />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto-World</Link>
        </Typography.Title>
        {/* <Button className="menu-conrainer">

        </Button> */}
      </div>
      <Menu className="menu">
        <MenuItem className="options" icon={<HomeOutlined className="icons"/>}>
          <Link className="nav-text" to="/">Home</Link>
        </MenuItem>
        <MenuItem className="options" icon={<FundOutlined className="icons"/>}>
          <Link className="nav-text" to="/cryptocurrencies">Cryptocurrencies</Link>
        </MenuItem>
        <MenuItem className="options" icon={<BulbOutlined className="icons"/>}>
          <Link className="nav-text" to="/news">News</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
