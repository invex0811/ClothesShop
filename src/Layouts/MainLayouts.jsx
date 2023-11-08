import { Layout } from "antd";
import HeaderBar from "../Components/HeaderBar/HeaderBar";

const { Content, Footer, Sider } = Layout;
const MainLayouts = (props) => {
  return (
    <>
      <Layout>
        <HeaderBar />
        <Content style={{ padding: "0 50px" }}>{props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default MainLayouts;
