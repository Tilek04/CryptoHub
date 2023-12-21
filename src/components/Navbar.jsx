import React from "react";
import { Button, Typography, Menu, Avatar } from "antd";
import './styles/navbar.css';
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
        <Avatar src={icon} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">Crypto-World</Link>
        </Typography.Title>
        {/* <Button className="menu-conrainer">

        </Button> */}
      </div>
      <Menu theme="dark" >
        <MenuItem icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </MenuItem>
        <MenuItem icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </MenuItem>
        <MenuItem icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
