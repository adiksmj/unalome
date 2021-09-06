import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';





const ImageHome5 = () => {
    return ( 
        <>
          <div className="container">
          <div>
            <img src="ourFounder.jpg" width="100%" height="900px"/>
          </div>
          <div>
            <div>
              <p>“CREATING A PIECE OF FURNITURE, IT’S LIKE A PIECE OF ART”</p>
            </div>
            <div className="faimage">
            <a href="https://www.youtube.com/watch?v=iYz1qN2NG9I"> <FontAwesomeIcon icon={faPlay} color="white" size="2x" /></a>
            </div>
          </div>
          </div>
          <style jsx>{`
            .container {
                width: 100%;
                height: auto;
                margin: 0;
                padding: 0;
                position: relative;
                overflow: hidden;
                line-height: 0;
                
            }

            .container img {
                object-fit: cover;
                object-position: 0px 0px;
              
            }

            .container p {
                position: absolute;
                top: 50%;
                width: 100%;
                text-align: center;
                color: white;
            }

            .faimage {
              position: absolute;
              top: 56%;
              left: 50%;
            }

          `}</style>
        </>
     );
}
 
export default ImageHome5;