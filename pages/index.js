import Head from 'next/head'
import Image from 'next/image'
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
