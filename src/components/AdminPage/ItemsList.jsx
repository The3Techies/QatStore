import { AiFillEdit, AiFillDelete } from "react-icons/Ai";

function ItemsList() {
  const HandleEdit = () => {};

  const HandleDelete = () => {};

  const data = [
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 1,
      name: "name1",
      img: "https://via.placeholder.com/600/92c952",
      price: "2500",
    },
    {
      id: 1,
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
            onClick={HandleDelete}
          />
        </div>

        <div className="flex md:gap-4 gap-2 items-center md:text-xl text-xs font-bold">
          <p>{name}</p>
          <p>{price} ريال</p>
          <img className="md:w-16 md:h-16 w-6 h-6 rounded-full" src={img} alt="" />
        </div>

      </div>
    );
  });

  const name = "اسم واحد";
  const price = "";

  return (
    <div className="w-screen bg-[#3B6446] flex flex-col justify-center items-center mt-[-1px] p-4  ">
      <div className="flex flex-col items-center md:w-[50%] w-[100%]  bg-[#D9D9D9]  md:p-4 rounded-xl">
        {ItemsHtml}
      </div>
    </div>
  );
}

export default ItemsList;
