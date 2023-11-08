import { Button, Dropdown, Image, Space, Typography } from "antd";
import { CloseOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const Cart = () => {
  const clothesCart = useSelector((state) => state.cart.cart);

  const items = clothesCart.map((item, index) => ({
    label: (
      <Space style={{ display: "flex", alignItems: "center" }}>
        <Image src={item.image} preview={false} height={100} />
        <Title style={{ margin: 0 }} level={5}>
          {item.name}
        </Title>
        <Text>{item.cost}$</Text>
        <Button
          danger
          icon={[<CloseOutlined key={"delete"} />]}
          type={"text"}
        />
      </Space>
    ),
    key: index,
  }));
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]} arrow>
        <Button
          onClick={(e) => e.preventDefault()}
          shape={"circle"}
          icon={<ShoppingOutlined />}
        />
      </Dropdown>
    </>
  );
};

export default Cart;
