const Imagehome2 = () => {
    return ( 
        <div>
        <div className="container">
            <img src="https://unalomeinterior.com/wp-content/uploads/bg-sawah.jpg"></img>
        </div>
        <style jsx>{`
        .container {
            position: relative;
            height: 550px;
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
        
        `}</style>
        </div>
     );
}
 
export default Imagehome2;