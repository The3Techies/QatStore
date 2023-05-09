import aboutImage from "../../assets/heroImage.webp";


function About() {
  const aboutpars = [
    "انا بائع قات مقيم في مدينة صنعاء باليمن وأقدم بعضًا من أفضل أنواع القات في المنطقة. لدي مجموعة متنوعة من أنواع القات التي تلبي الأذواق والتفضيلات المختلفة.",
    "  يأتي قاتي من أكثر المناطق موثوقة وموثوقية في اليمن ، حيث يُزرع في ظروف مثالية أقصى درجات العناية والاهتمام بالتفاصيل.    ",
    "من أشهر أنواع القات ، المعروف بأوراقه والعصيرية ، وتأثيره المتوازن والناعم. ما شاطرته القوي والراقي ، وصنف الشعبي المفضل لخصائصه المهدئة والمريحة.",
    "أنا فخور جدًا بالأداء سواء كنت من محبي القات العادي أو لأول مرة ، فأنا على ثقة من أنك ستحب القات العشوائية التي أقدمها. ، تتردد في موقع الويب الخاص بي وتقديم عرض اليوم!",
  ];
  const aboutParHtml = aboutpars.map((para) => (
    <p key={para}>
      {para}
      <br />
    </p>
  ));

  return (
    <div className="w-screen h-full bg-[#3B6446] py-10 mt-2 rounded-xl">
      <div className="flex items-center justify-center flex-col gap-2 mb-8">
        <h1 className="flexfont-bold text-4xl text-[#fff]">عَنِّي</h1>
        <div className="bg-[#fff] w-20 h-1"></div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <div className="lg:w-1/2 lg:mb-0 flex justify-center">
          <img
            src={aboutImage}
            alt="man photo"
            className=" rounded-3xl w-[70%] md:h-auto h-full  "
          />
        </div>
        <div className="lg:w-1/2 px-5 lg:pl-20 flex flex-col items-center justify-center text-white">
          <h1 className="md:text-5xl text-3xl mt-2 md:mt-0 font-bold mb-6 text-white self-start">
            عبدالرحمن الزنجبيله
          </h1>
          <p className="text-lg mb-5 text-white ">{aboutParHtml}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
