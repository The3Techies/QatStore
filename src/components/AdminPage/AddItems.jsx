import { useState } from "react";

function AddItems() {
  const [addActive, setAddActive] = useState(false);

  const [name, setName] = useState("");
  const [namePlaceHolder, setNamePlaceHolder] = useState("نوع القات");
  const [nameBorder, setNameBorder] = useState("");

  const [price, setPrice] = useState("");
  const [pricePlaceHolder, setPricePlaceHolder] = useState("السعر");
  const [priceBorder, setPriceBorder] = useState("");

  const [image, seImage] = useState(null);
  const [imageBorder, setImageBorder] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    seImage(URL.createObjectURL(file));
  };

  const handleAddItme = () => {
    if (name === "") {
      setNamePlaceHolder("نوع القات (مطلوب)");
      setNameBorder("border-[red]");
    } else {
      setNamePlaceHolder("مطلوب");
      setNameBorder("");
    }

    if (price === "") {
      setPricePlaceHolder("السعر (مطلوب)");
      setPriceBorder("border-[red]");
    } else {
      setPricePlaceHolder("السعر");
      setPriceBorder("");
    }

    if(image === null){
      setImageBorder("border-[red]")
    }else{
      setImageBorder("");
    }

    if (name != "" && price != "" && image != null) {
      // pass the info to the databasee
      setAddActive(false);
      setName("");
      setPrice("");
      seImage(null)
    }
  };

  const handelCancel = () => {
    setAddActive(false);
    setName("");
    setPrice("");
    seImage(null)
    setPricePlaceHolder("السعر");
    setPriceBorder("");
    setNamePlaceHolder("نوع القات");
    setNameBorder("");
    setImageBorder("");
  };

  return (
    <div className="w-screen bg-[#3B6446] flex flex-col justify-center items-center mt-[-1px] p-4 ">
      <div
        className={
          "items-center justify-center w-[60%] text-[#ffffff] " +
          (addActive ? "hidden " : "flex")
        }
      >
        <h1 className=" md:text-2xl text-xl">أنواع القات</h1>
        <button
          className="bg-[#4C956C] mr-4 p-2 rounded-xl"
          onClick={() => setAddActive(true)}
        >
          اضافة
        </button>
      </div>
      <div
        className={
          " flex-col md:w-[50%] w-[100%] bg-[#D9D9D9] md:p-4 p-2 rounded-xl " +
          (addActive ? "flex" : " hidden")
        }
      >
        <label className={"cursor-pointer bg-[#3B6446] py-2 px-4 h-32 rounded-lg select-none hover:bg-[#638e70] flex items-center justify-center border-2 " + imageBorder}>
          حمل الصورة هنا
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        {image && (
        <img src={image} alt="Selected" className="mt-4 w-full rounded-2xl" />
      )}

        <input
          className={
            "my-4 bg-[#3B6446] p-2 rounded-lg text-[#ffffff] border-2 focus:bg-[#638e70] " +
            nameBorder
          }
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={namePlaceHolder}
        />
        <input
          className={
            "mb-4 bg-[#3B6446] p-2 rounded-lg text-[#ffffff] border-2 focus:bg-[#638e70] " +
            priceBorder
          }
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder={pricePlaceHolder}
        />
        <button
          className="mb-4 bg-[#4C956C] p-2 rounded-xl font-bold text-[#ffffff] "
          onClick={handleAddItme}
        >
          اضافة
        </button>
        <button className="bg-[#4C956C] p-2 rounded-xl font-bold text-[#ffffff] " onClick={handelCancel}>
          إلغاء
        </button>
      </div>
    </div>
  );
}

export default AddItems;
