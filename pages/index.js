
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
