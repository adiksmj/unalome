import { Parallax } from "react-parallax";

const image = "/bvlgari-footer.jpeg"
const Imagehome6 = () => {
    return ( 
        <div>
            <Parallax bgImage={image} strength={300}>
                <div style={{ height:700 }}></div>
            </Parallax>
        </div> 
     );
}
 
export default Imagehome6;