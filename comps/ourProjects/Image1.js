const ImageHeader = () => {
    return (
       <>  
        <div className="container">
            <img src="/project-hero-bw-smooth.jpg" width="100%" height="auto"/>
        </div>
        <style jsx>{`

        .container {
            width: 100%;
            height: 500px;
            overflow: hidden;
           
        } 

        img {
            object-position: 0px -155px;
        }   
        
        `}
        </style>
       </>
     );
}
 
export default ImageHeader;