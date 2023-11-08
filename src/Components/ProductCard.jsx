import { Card } from "antd";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <>
      <Card
        cover={<img src={props.src} alt={"example"} height={400} />}
        actions={[
          <ShoppingCartOutlined style={{ fontSize: "24px" }} key={"buy"} />,
          <PlusOutlined style={{ fontSize: "24px" }} key={"wishList"} />,
        ]}
      >
        <Meta title={props.name} description={`Cost: ${props.cost}`} />
      </Card>
    </>
  );
};

export default ProductCard;
