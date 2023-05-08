import heroImg from "../../assets/heroImage.jpg";
import logo from "../../assets/logo1.jpeg";

function AdminIfo() {
  return (
    <div className="w-screen bg-[#3B6446] md:p-2 flex justify-center items-center">
      <div className="flex justify-around items-center md:w-[90%]">
        <div className="flex items-center ">
          <img
            src={heroImg}
            alt="my pic"
            className=" w-14 h-14 rounded-full ml-4"
          />
          <h1 className="text-xl text-[#ffffff] ">عبدالرحمن الزنجبيله</h1>
        </div>
        <img src={logo} className="w-30 h-16 min-w-fit min-h-fit " alt="Logo" />
      </div>
    </div>
  );
}

export default AdminIfo;
