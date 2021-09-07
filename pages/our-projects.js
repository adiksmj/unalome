import ImageHeader from "../comps/ourProjects/Image1";
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'
import SectionAPro from "../comps/ourProjects/sectionApro";
import Portfolio from "../comps/ourProjects/portfolio";
import SectionBpro from "../comps/ourProjects/sectionBpro";


export default function OurProjects() {
    return (
      <div>
      <div className="container">
        <Navbar/>
        <ImageHeader />
        <SectionAPro />
        <Portfolio />
        <SectionBpro />
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
  