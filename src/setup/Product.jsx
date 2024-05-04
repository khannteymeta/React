import Card from "./Card";

const Product = () => {
  const shoes = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/9d/6d/e6/9d6de68af85c577a56c00368b24feb3a.jpg",
      brand: "Addidas",
      detail: "product in cambodia",
      price: "30$",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/9d/6d/e6/9d6de68af85c577a56c00368b24feb3a.jpg",
      brand: "Addidas",
      detail: "product in cambodia",
      price: "40$",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/9d/6d/e6/9d6de68af85c577a56c00368b24feb3a.jpg",
      brand: "Nike",
      detail: "product in cambodia",
      price: "50$",
    },
  ];

  return (
    <div>
      {shoes.map(({ img, brand, detail, price, id }) => {
        return (
          <Card
            key={id}
            img={img}
            brand={brand}
            detail={detail}
            price={price}
          />
        );
      })}
    </div>
  );
};
export default Product;
