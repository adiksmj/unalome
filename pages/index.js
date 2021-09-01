import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import YoutubeEmbed from '../comps/video'
import SectionA from '../comps/sectionA'
import ImageHome1 from '../comps/imagehome1'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <YoutubeEmbed />
      <SectionA />
      <ImageHome1 />
    </div>
  )
}
