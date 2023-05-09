import {useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import getData from "../../Firebase/getData";
import deleteData from "../../Firebase/deleteData";
import deleteFromStorge from "../../Firebase/deleteFromStorge";

function ItemsList() {
  const [confirmDelete, setConfirmDelete] = useState(0);
  const ChangeConfirmDelete = (id) => {
    if (confirmDelete === id) setConfirmDelete(0);
    else setConfirmDelete(id);
  };
 
  const [products,setProducts] = useState([]);

  const getProducts = async ()=>{
    const data = await getData()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, []);
  
  const HandleDelete = async (id ,imgId) => {
    await deleteData(id)
    deleteFromStorge(imgId)
    getProducts()
  };

  
  const ItemsHtml = products.map(({},i) => {
    return (
      <div
        key={products[i].id}
        className="bg-[#4C956C] w-[95%] p-4 flex justify-between items-center flex-row my-2 rounded-3xl"
      >
        <div className="flex">
        <AiFillDelete
          className="bg-[#ffffff] md:w-16 md:h-16 w-6 h-6 rounded-xl cursor-pointer ml-2"
          onClick={() => ChangeConfirmDelete(products[i].id)}
        />
        <button
          className={
            "text-[red] md:text-2xl " +
            (confirmDelete === products[i].id ? "block" : "hidden ")
          }
          onClick={() => HandleDelete(products[i].id ,products[i].imgId )}
        >
          تاكيد
        </button>

        </div>
        

        <div className="flex md:gap-4 gap-2 items-center md:text-xl text-xs font-bold">
          <div className="text-center">
            <p>{products[i].name}</p>
            <p>{products[i].price} ريال</p>
          </div>

          <img
            className="md:w-16 md:h-16 w-6 h-6 rounded-full"
            src={products[i].img}
            alt=""
          />
        </div>
      </div>
    );
  });

  return (
    <div className="w-screen min-h-screen bg-[#3B6446] flex flex-col  items-center mt-[-1px] p-4  ">
      <div className="flex flex-col items-center md:w-[50%] w-[100%]  bg-[#D9D9D9] min-h-[5rem] md:p-4 rounded-xl">
        {ItemsHtml}
      </div>
    </div>
  );
}

export default ItemsList;
