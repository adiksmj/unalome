

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
        }

        img {
            width: 400px;
            height: auto;
            flex-grow: 3;
        }
       
        `}</style>
        </>
     );
}
 
export default ImageHome1;