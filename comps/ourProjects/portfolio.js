const Portfolio = () => {
    return (
       <>  
        <div className="wrapper">
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/Whotel.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>W HOTEL BALI</h3> 
                    <p>Seminyak, Bali</p>
                </figcaption>
        </a>
        </div>
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/bvlgari.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>BVLGARI HOTEL</h3> 
                    <p>Uluwatu, Bali</p>
                </figcaption>
        </a>
        </div>
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/belvedere.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>BELVEDERE SUITES</h3> 
                    <p>Santorini, Greece</p>
                </figcaption>
        </a>
        </div>
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/millstone.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>MILLSTONE CAVE SUITES</h3> 
                    <p>Uchisar, Turkey</p>
                </figcaption>
        </a>
        </div>
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/movenpick.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>MOVENPICK RESORT & SPA</h3> 
                    <p>Jimbaran, Bali</p>
                </figcaption>
        </a>
        </div>
        <div className="box">
        <a href="">
                <div className="imagebox">
                <img src="/imgOurProject/HotelWailea.jpg"/>
                </div>
                <figcaption className="caption">
                    <h3>WAILEA HOTEL MAUI</h3> 
                    <p>Maui</p>
                </figcaption>
        </a>
        </div>
        </div>
        <style jsx>{`
        
        .wrapper {
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin: 0;
            padding: 0;
            overflow: hidden;
            line-height: 0;
        }

        
        .box {
            width: 33.33%;
            height: auto;
            border: 0.1em solid #ccc;
            background-color: #ebebeb;
        }

        .imagebox {
            width: 100%;
            height: 380px;
            padding: 0;
            overflow: hidden;
        }

        .box a {
            text-decoration: none;
            color: black;
            
        }

        .caption {
            padding-left: 20px;
            height: auto;
            margin: 30px auto;
            
        }


        h3 {
            font-size: 17px;
        }
        .caption p {
            margin-top: 30px;
        }
        

        .box img {
            filter: grayscale(100);
            transition: transform 1s, filter 0.3s ease-in-out;
            transform-origin: center center;
           
            
        }

        .box:hover img {
            filter: grayscale(0%);
            transform: scale(1.1);
        }
        
        
        
        `}</style>
       </>
     );
}
 
export default Portfolio;