

const ImageHome1 = () => {
    return ( 
        <>
        <div className="container">
            <img src="/image-left.jpg"></img>
            <img src="/image-center.jpg"></img>
            <img src="/image-right.jpg"></img>
        </div>
        <style jsx>{`

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        img {
            width: 400px;
            height: auto;
            flex-grow: 3;
            transition: transform 2s, filter 1.5s ease-in-out;
            transform-origin: center center;
            filter: brightness(50%);
        }

        img:hover {
            filter: brightness(100%);
            transform: scale(1.3);
        }
       
        `}</style>
        </>
     );
}
 
export default ImageHome1;