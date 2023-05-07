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
  //   // height: "100%",
  //   // width: "100%",
  // };

  return (
    <div className="" style={bgStyle}>
      <div className="max-w-screen-lg mx-auto h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mb-0">
          <img src={heroImg} alt="programmer" className="self-center rounded-3xl w-full h-[500px]" />
        </div>
        <div className="lg:w-1/2 px-5 lg:pl-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-5 text-green-600">عبدالرحمن الزنجبيله </h1>
          <p className="text-lg mb-5 text-green-600 ">أنا بائع قات مقيم في مدينة صنعاء باليمن وأقدم 
بعضًا من أفضل أنواع القات في المنطقة.</p>
          <button className="bg-green-800 text-white py-2 px-4 rounded-full font-bold">أنواع القات</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
