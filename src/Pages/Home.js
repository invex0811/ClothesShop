import MainLayouts from "../Layouts/MainLayouts";
import { Carousel, Image, Space, Typography } from "antd";
import ProductCard from "../Components/ProductCard";
import { useSelector } from "react-redux";

const { Title } = Typography;
const ad = [
  "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const Home = () => {
  const clothes = useSelector((state) => state.clothes.clothes.man);

  return (
    <>
      <MainLayouts>
        <Carousel autoplay style={{ marginTop: "20px" }}>
          {ad.map((item, index) => (
            <div key={index}>
              <Image src={item} height={400} preview={false} />
            </div>
          ))}
        </Carousel>
        <Title style={{ display: "flex", justifyContent: "start" }} level={1}>
          Favorite:
        </Title>
        <Space wrap style={{ display: "flex", justifyContent: "center" }}>
          {clothes.map((item) => (
            <div key={item.name}>
              <ProductCard src={item.image} name={item.name} cost={item.cost} />
            </div>
          ))}
        </Space>
      </MainLayouts>
    </>
  );
};

export default Home;
