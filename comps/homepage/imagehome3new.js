

const ImageHome3New = () => {
    return ( 
        <>
        <div className="container">
            <div className="box">
                <h3>OUR COLLECTION</h3>
                <img src="/imageOurCollection.jpg"></img>
            </div>
            <div className="box">
                <h3>OUR STORY</h3>
                <img src="/imageOurStory.jpg"></img>
            </div>
            <div className="box">
                <h3>OUR PROJECTS</h3>
                <img src="/imageOurProject.jpg"></img></div>
        </div>
        <style jsx>{`

        .container {
            display: flex;
            flex-flow: row wrap;
            margin: 0;
            padding: 0;
            overflow: hidden;
            line-height: 0;
            
        }

        .box {
            width: 33.3333%;
            height: auto;
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: transform 1s, filter 1s ease-in-out;
            transform-origin: center center;
            
        }

        img {
            width: 100%;
            height: auto;
            flex-grow: 3;
            filter: brightness(40%);
            transition: transform 1s, filter 1s ease-in-out;
            transform-origin: center center;
        }
            
        

        img:hover {
            filter: brightness(100%);
            transform: scale(1.1);
        }

        h3 {
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 99;
          
        }

        
     
        `}</style>
        </>
     );
}
 
export default ImageHome3New;