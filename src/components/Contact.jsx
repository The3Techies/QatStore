import facebookicon from '../assets/facebookicon.png'
import instaIcon from '../assets/instaIcon.png'
import phoneicon from '../assets/phoneicon.png'
import whatsupicon from '../assets/whatsupicon.png'





function Contact() {
  return (
    <div className="w-screen mt-2 pb-12 bg-[#4C956C]">

      <div className="flex items-center justify-center flex-col gap-2 mb-6 ">
        <h1 className="flexfont-bold text-4xl text-[#fff]">للتواصل معي</h1>
        <div className="bg-[#fff] w-48 h-1"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">

        <div className=" w-fit bg-[#D9D9D9] flex flex-row-reverse p-2 cursor-pointer hover:bg-[#0675e8] md:ml-10 md:mb-0 mb-10 rounded-lg">
          <h1 className=" text-2xl font-bold mr-2">فيس بوك</h1>
          <img className='w-10 h-10' src={facebookicon} alt="facebookicon" />
        </div>

        <div className=" w-fit bg-[#D9D9D9] flex flex-row-reverse p-2 cursor-pointer hover:bg-[#f54900] md:ml-10 md:mb-0 mb-10 rounded-lg">
          <h1 className=" text-2xl font-bold mr-2">انستقرام</h1>
          <img className='w-10 h-10' src={instaIcon} alt="instaIcon" />
        </div>
 
        <div className=" w-fit bg-[#D9D9D9] flex flex-row-reverse p-2 cursor-pointer hover:bg-[#4cca5b] rounded-lg">
          <h1 className=" text-2xl font-bold mr-2">770900000</h1>
          <img className='w-10 h-10 mr-2' src={whatsupicon} alt="facebookicon" />
          <img className='w-10 h-10' src={phoneicon} alt="phoneicon" />

        </div>

      </div>

    </div>
  )
}

export default Contact