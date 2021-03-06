
import Navbar from '../comps/navbar'
import YoutubeEmbed from '../comps/homepage/video'
import SectionA from '../comps/homepage/sectionA'
import ImageHome1 from '../comps/homepage/imagehome1'
import SectionB from '../comps/homepage/sectionB'
import Imagehome2 from '../comps/homepage/imagehome2'
import SectionC from '../comps/homepage/sectionC'
import ImageHome3New from '../comps/homepage/imagehome3new'
import SectionD from '../comps/homepage/sectionD'
import Imagehome4 from '../comps/homepage/imagehome4'
import SectionE from '../comps/homepage/sectionE'
import Footer from '../comps/footer'
import ImageHome5 from '../comps/homepage/imagehome5'
import SectionF from '../comps/homepage/sectionF'
import SectionG from '../comps/homepage/sectionG'
import Imagehome6 from '../comps/homepage/imagehome6'


export default function Home() {
  return (
    <div>
    <div className="container">
      <Navbar/>
      <YoutubeEmbed />
      <SectionA />
      <ImageHome1 />
      <SectionB />
      <Imagehome2 />
      <SectionC />
      <ImageHome3New />
      <SectionD />
      <Imagehome4 />
      <SectionE />
      <ImageHome5 />
      <SectionF />
      <SectionG />
      <Imagehome6 />
      <Footer />
    </div>
    <style jsx>{`
    .container {
      max-width: 100%; 
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    `}</style>
    </div>
  ) 
}
