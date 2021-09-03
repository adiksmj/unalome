const Footer = () => {
    return ( 
        <>
        <div className="wrapper">
            <div className="container">
                <div className="unalome">
                    <img src="unalome.png"/>
                    <p>We are bespoke furniture company headquartered in Bali. We design and manufacture custom and contract pieces for sustainably driven commercial and residential projects.</p>
                </div>
                <div className="contact">
                    <h3>CONTACT US</h3>
                    <p>Jalan Sunset Road 50x Bali, Indonesia</p>
                    <p>M – F | 8 am – 5 pm info@unalomeinterior.com</p>
                </div>
                <div className="news">
                    <h3>NEWSLETTER</h3>
                    <input type="text" placeholder="Email Address"></input>
                    <input className="submit" type="submit" value="SUBSCRIBE"></input>
                </div>
                <div className="follow">
                    <h3>FOLLOW US</h3>
                    <a href=""><img src="fbicon.png" /></a>
                    <a href=""><img src="instaicon.png" /></a>
                    <a href=""><img src="mailicon.png" /></a>
                    <a href=""><img src="youtubeicon.png" /></a>
                </div>
            </div>
            <div className="copyright">
                <p>© 2020 <strong>Unalome Interior.</strong> All Rights Reserved.</p>
                <a href="">Disclaimer</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms Conditions</a>
            </div>
        </div>
        <style jsx>{`
        .wrapper {
            display: block;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            background-color: #77777e;
            color: #c7c3c3;
            overflow: hidden;
            
            
        }

        .container {
            display: flex;
            width: 100%;
            height: auto;
            justify-content: space-around;
            align-items: flex-start;
            
            padding: 20px 25px;
        }

        .unalome {
            width: 25%;
            height: auto;
            margin-left: 25px;
        }

        .unalome img {
            width: 40%;
            height: auto;
        }

        .unalome p {
            width: 70%;
            margin: 0;
        }

        .contact {
            width: 25%;
            height: auto;
        }

        .contact h3 {
            display: block;
        }
        .contact p {
            width : 170px;
          
        }

        .news {
            width: 25%;
            height: auto;
        }

        input {
            box-sizing: border-box;
            display: inline-block;
            background: transparent;
            width: 300px;
            height: 50px;
            border: 1px solid #c7c3c3;;
            border-radius: 5px;
            margin: 0;
            margin-bottom: 15px;
        }

        ::placeholder {
            color: #c7c3c3;;
            text-align: center;
        }

        .submit {
            background: transparent;
            cursor: pointer;
            color: #c7c3c3;
        }
        .follow {
            width: 25%;
            height: auto; 
        }

        .follow img {
            width: 40px;
            height: 40px;
            padding: 4px;
            border: 1px solid #c7c3c3;
        }







        .copyright {
            padding-top: 30px;
        }

        .copyright p{
            display: inline-block;
            padding-left: 50px;
        }

        .copyright a{
            display: inline;
            float: right;
            padding-right: 50px;
            padding-top: 20px;
            color: #c7c3c3;;
            text-decoration: none;
        }
        
        .copyright a:hover {
            text-decoration: underline;
        }
        
        `}</style>
        </>
     );
}
 
export default Footer;