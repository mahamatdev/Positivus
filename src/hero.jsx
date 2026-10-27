import Illustration from "./assets/Illustration.png"
function Hero() {
  return (
    <div className="hero grid grid-cols-2 gap-42 pt-4">
        <div className="f1 pl-[60px] w-2xl">
            <h2 className="header  text-7xl">Navigating the digital landscape for success</h2>
            <p className="para pt-9 w-[380px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="btn mt-7 border-1 h-[45px] w-[160px] rounded-xl bg-black text-white">Book a consultation</button>
        </div>
        <div className="img">
            <img src={Illustration} alt="" width={500} />
        </div>
    </div>
  )
}

export default Hero