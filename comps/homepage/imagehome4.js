import { Parallax } from "react-parallax";

const image = "/bromo.jpg"
const Imagehome4 = () => {
    return ( 
        <div>
            <Parallax bgImage={image} strength={500}>
                <div style={{ height:650 }}></div>
            </Parallax>
        </div> 
     );
}
 
export default Imagehome4;