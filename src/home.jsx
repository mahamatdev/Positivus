import logo from "./assets/logo.png"
function Home() {
  return (
    <div className="navbar flex flex-2 items-center justify-between pt-2">
      <div className="logo pl-[60px] ">
        <img src={logo} alt="" />
      </div>
      <div className="links pr-[60px] space-x-8">
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Use Cases</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
        <button type="submit" className="btn border-1 h-[40px] w-[150px] rounded-xl">Request a quote</button>
      </div>
    </div>
  )
}

export default Home