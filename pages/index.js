import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import YoutubeEmbed from '../comps/homepage/video'
import SectionA from '../comps/homepage/sectionA'
import ImageHome1 from '../comps/homepage/imagehome1'
import SectionB from '../comps/homepage/sectionB'
import Imagehome2 from '../comps/homepage/imagehome2'
import SectionC from '../comps/homepage/sectionC'

export default function Home() {
  return (
    <div>
    <div classname="container">
      <Navbar/>
      <YoutubeEmbed />
      <SectionA />
      <ImageHome1 />
      <SectionB />
      <Imagehome2 />
      <SectionC />
    </div>
    <style jsx>{`
    .container {
      max-width: 500px; 
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    `}</style>
    </div>
  ) 
}
