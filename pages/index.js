import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import YoutubeEmbed from '../comps/video'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <YoutubeEmbed />
    </div>
  )
}
