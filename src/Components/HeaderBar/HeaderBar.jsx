import { Layout, Space, Typography } from "antd";
import { useSelector } from "react-redux";
import style from "./HeaderBar.module.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart/Cart";

const { Header } = Layout;
const { Title } = Typography;

const HeaderBar = () => {
  const links = useSelector((state) => state.navigation.links);

  const active = ({ isActive }) => (isActive ? style.active : style.navLink);

  const linksItem = links.map((item) => (
    <NavLink key={item.title} className={active} to={item.link}>
      {item.title}
    </NavLink>
  ));

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Space>
          <Title style={{ margin: "0 10px 0 0", color: "#fff" }} level={2}>
            LOGO
          </Title>
          <Space>{linksItem}</Space>
        </Space>
        <Space>
          <Cart />
        </Space>
      </Header>
    </>
  );
};

export default HeaderBar;
