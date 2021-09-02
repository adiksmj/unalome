

const ImageHome3New = () => {
    return ( 
        <>
        <div className="container">
            <div className="box"><img src="/imageOurCollection.jpg"></img></div>
            <div className="box"><img src="/imageOurStory.jpg"></img></div>
            <div className="box"><img src="/imageOurProject.jpg"></img></div>
        </div>
        <style jsx>{`

        .container {
            display: flex;
            flex-flow: row wrap;
            
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        .box {
            width: 33.3333%;
            height: auto;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: auto;
            flex-grow: 3;
            transition: transform 1s, filter 1s ease-in-out;
            transform-origin: center center;
            filter: brightness(40%);
            cursor: pointer;
        }

        img:hover {
            filter: brightness(100%);
            transform: scale(1.1);
        }
       
        `}</style>
        </>
     );
}
 
export default ImageHome3New;