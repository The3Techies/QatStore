import bgImage from "../assets/bg.png";
import heroImg from "../assets/heroImage.jpg";

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // const heroImage = {
  //   backgroundImage: `url(${heroImg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
    // height: "100%",
    // width: "100%",
  // };

  return (
    <div className="w-screen mx-auto h-full" style={bgStyle}>
      <div className="w-screen mx-auto h-full flex flex-col lg:flex-row items-center justify-center p-10">
        <div className="lg:w-1/2 lg:mb-0 flex justify-start">
          <img
            src={heroImg}
            alt="photo"
            className="self-center rounded-3xl w-[70%] h-auto "
          />
        </div>
        <div className="lg:w-1/2 px-5 lg:pl-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-5 text-black bg-slate-50 pt-4 pb-6 px-8 rounded-lg">
            عبدالرحمن الزنجبيله
          </h1>
          <p className="text-2xl mb-5 text-white">
            أنا بائع قات مقيم في مدينة صنعاء باليمن وأقدم بعضًا من أفضل أنواع
            القات في المنطقة.
          </p>
          <button className="bg-green-800 text-lg  text-white py-4 px-6 rounded-full font-bold hover:bg-lime-600 hover:text-xl">
            أنواع القات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
