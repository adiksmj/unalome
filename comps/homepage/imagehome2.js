import { Parallax } from "react-parallax";

const image = "https://unalomeinterior.com/wp-content/uploads/bg-sawah.jpg"
const Imagehome2 = () => {
    return ( 
        <div>
            <Parallax bgImage={image} strength={500}>
                <div style={{ height:800 }}>
                    
                </div>

            </Parallax>
        {/* <div className="container">
            <img src="https://unalomeinterior.com/wp-content/uploads/bg-sawah.jpg"></img>
        </div>
        <style jsx>{`
        .container {
            position: relative;
            width: 100%;
            height: 650px;
            z-index: -1;  
        }

        div img {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            height: auto;
            width: inherit;
            position: fixed;
            top: 0px; 
        }
        
        `}</style>*/}
        </div> 
     );
}
 
export default Imagehome2;