import { useEffect, useState } from "react";

const ProductList = () => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    //get data from API
    // setPhotos(dummyData);
  }, []);


  const data = [
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    }, {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    }, {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    }, {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    }, {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    }, {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
  ];

  const productsHtml = data.map(({id, name, img, price}) => {
    return (
      <div
      key={id}
      className="bg-[#2C6E49] w-56 flex flex-col items-center py-4 "
    >
      <img className="w-48 h-56" src={img} alt="Product" />
      <p className="mt-2 text-lg text-[#ffffff]">{name}</p>
      <h1 className="bg-[#D9D9D9] text-center text-lg mt-2 w-48 font-bold">
        {price} ريال
      </h1>
    </div>
    )
})

  return (
    <div className="w-screen bg-bgProductList bg-no-repeat bg-cover bg-center bg-opacity-[50%] mt-2 ">
      <div className="flex flex-wrap w-full justify-center gap-9 p-10">
        {productsHtml}
      </div>
    </div>
  );
};

export default ProductList;
