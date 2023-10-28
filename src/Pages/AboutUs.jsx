import aboutMainImage from "../assets/Images/aboutMainImage.png"
import apj from "../assets/Images/apj.png"
import billgates from "../assets/Images/billGates.png"
import einstein from "../assets/Images/einstein.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"
import steveJobs from "../assets/Images/steveJobs.png"
import HomeLayout from "../Layout/HomeLayout.1";
function AboutUs(){
    return(
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold mt-40">Affordable and quality education</h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world. 
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img src={aboutMainImage} style={{filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"}}alt="about main image" className="drop-shadow-2xl" id="test1" />
                    </div>
                </div>


<div className="carousel w-1/2 my-16 m-auto ">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
    <div className="w-[50%] absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
   
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img src={billgates} className="w-40 rounded-full border-2 border-gray-400" />
    <div className=" w-[50%] absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
    </div>
    
  <div id="slide3" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
    <div className=" w-[50%] absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
    </div>
    
  <div id="slide4" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
    <div className="w-[50%] absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
    </div>
    
  <div id="slide5" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
    <div className="w-[50%] absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    
            </div>
        </HomeLayout>
    )
}

export default AboutUs;