import amazon from "./assets/amazon.png"
import dribbble from "./assets/dribbble.png"
import hub from "./assets/hub.png"
import notion from "./assets/notion.png"
import netflix from "./assets/netflix.png"
import zoom from "./assets/zoom.png"
function Partner() {
  return (
    <div className="partner flex flex-6 justify-center space-x-20 pt-5">
        <a href=""><img src={amazon} alt="" /></a>
        <a href=""><img src={dribbble} alt="" /></a>
        <a href=""><img src={hub} alt="" /></a>
        <a href=""><img src={notion} alt="" /></a>
        <a href=""><img src={netflix} alt="" /></a>
        <a href=""><img src={zoom} alt="" /></a>
    </div>
  )
}

export default Partner