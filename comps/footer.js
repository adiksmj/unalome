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
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
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
            width: 100%;
            height: 360px;
            margin: 0;
            padding: 0;
            background-color: #77777e;
            color: white; 
            
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
            border: 1px solid white;
            color: white;
            border-radius: 5px;
            margin: 10px 0;
        }

        ::placeholder {
            color: white;
            text-align: center;
        }

        .submit {
            background: transparent;
            cursor: pointer;
        }
        .follow {
            width: 25%;
            height: auto; 
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
            color: white;
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