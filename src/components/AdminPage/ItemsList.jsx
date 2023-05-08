import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function ItemsList() {

  const [confirmDelete, setConfirmDelete] = useState(0)
  const ChangeConfirmDelete = (id)=>{
    if(confirmDelete === id) setConfirmDelete(0)
    else setConfirmDelete(id)
  }

  const HandleEdit = (id) => {
  };

  const HandleDelete = (id) => {
    // console.log(id)
  };

  const data = [
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 2,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 3,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 4,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 5,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 6,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
  ];

  const ItemsHtml = data.map(({ id, name, img, price }) => {
    return (
      <div
        key={id}
        className="bg-[#4C956C] w-[95%] p-4 flex justify-between items-center flex-row my-2 rounded-3xl"
      >
        <div className="flex md:gap-4 gap-2">
          <AiFillEdit
            className="bg-[#ffffff] md:w-16 md:h-16 w-6 h-6  rounded-xl cursor-pointer"
            onClick={HandleEdit}
          />

          <AiFillDelete
            className="bg-[#ffffff] md:w-16 md:h-16 w-6 h-6 rounded-xl cursor-pointer"
            onClick={()=>ChangeConfirmDelete(id)}
          />
          <button className={"text-[red] md:text-2xl " + (confirmDelete === id ? "block"  :"hidden " ) }  onClick={()=>HandleDelete(id)} >تاكيد</button>
        </div>

        <div className="flex md:gap-4 gap-2 items-center md:text-xl text-xs font-bold">
          <div className="text-center">
            <p >{name}</p>
            <p>{price} ريال</p>
          </div>

          <img
            className="md:w-16 md:h-16 w-6 h-6 rounded-full"
            src={img}
            alt=""
          />
        </div>
      </div>
    );
  });

  return (
    <div className="w-screen bg-[#3B6446] flex flex-col justify-center items-center mt-[-1px] p-4  ">
      <div className="flex flex-col items-center md:w-[50%] w-[100%]  bg-[#D9D9D9]  md:p-4 rounded-xl">
        {ItemsHtml}
      </div>
    </div>
  );
}

export default ItemsList;
