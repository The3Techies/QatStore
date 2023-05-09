import { useEffect, useState } from "react";
import getData from "../../Firebase/getData";




const ProductList = () => {
  
  const [products,setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async ()=>{
      const data = await getData()
      setProducts(data)
    }
    getProducts()
  }, []);
  

  const productsHtml = products.map(({},i) => {
    return (
      <div
      key={products[i].id }
      className="bg-[#2C6E49] w-56 flex flex-col items-center py-4 rounded-xl"
    >
      <img className="w-48 h-56 rounded-lg" src={products[i].img} alt="Product" />
      <p className="mt-2 text-lg text-[#ffffff]">{products[i].name }</p>
      <h1 className="bg-[#D9D9D9] text-center text-lg mt-2 w-48 font-bold">
        {products[i].price } ريال
      </h1>
    </div>
    )
})

  return (
    <div className="w-screen bg-bgProductList bg-no-repeat bg-cover bg-center bg-opacity-[50%] mt-2 ">
      <div className="flex flex-wrap w-full min-h-[20rem] justify-center gap-9 p-10">
        {productsHtml}
      </div>
    </div>
  );
};

export default ProductList;
