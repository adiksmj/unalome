

const ImageHome1 = () => {
    return ( 
        <>
        <div className="container">
            <img src="/imgHome/image-left.jpg"></img>
            <img src="/imgHome/image-center.jpg"></img>
            <img src="/imgHome/image-right.jpg"></img>
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
            flex-grow: 1;
        }
       
        `}</style>
        </>
     );
}
 
export default ImageHome1;