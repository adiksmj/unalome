import Image from 'next/image';
import BurgerMenu from './burgermenu';

const Navbar = () => {


    return ( 
        <>
        <nav className="container">
            <div>
                <BurgerMenu />
            </div>
            <div className="logo">
                <Image src="/unalome.png" width="180" height="70"/>
            </div>
            
        </nav>
        <div className="containerMenu">
            <ul>
                <li><a href="">
                    <span>HOME</span>
                </a></li>
                <li><a href="">
                    <span>OUR PROJECTS</span><br />
                    <span className="sublist">HOSPITALITY & RESORTS</span>
                </a></li>
                <li><a href="">
                    <span>OUR COLLECTION</span>
                    <br /><span className="sublist">WHOLESALE</span>
                </a></li>
                <li><a href="">
                    <span>OUR STORY</span>
                </a></li>
                <li><a href="">
                    <span>OUR CLIENTS</span>
                </a></li>
                <li><a href="">
                    <span>GIVING BACK</span>
                    <br /><span className="sublist">OUR CORPORATE SOCIAL RESPONSIBILITY STRATEGY</span>
                </a></li>
                <li><a href="">
                    <span>CONTACT</span>
                </a></li>
                
            </ul>
        </div>
        <style jsx>{`
        .container {
            background: #77777e;
            width: 100%;
            height: 70px;
            position: fixed;
            top: 0;
            z-index: 1;
            }

            .logo {
            
            display: inline-block;
            margin-left: 25px;
            }

            {/* .menu {
                float: right;
                position: relative;
                top: 15px;
                right: 30px; */}
                
            }
            .containerMenu {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                min-height: 700px;
                display: table;
                vertical-align: middle;
                text-align: center;
                background-color: rgba(68, 68, 68, 0.93);
                z-index: 1;
                display: none;
               
                
            }

            .containerMenu ul {
                display: table-cell;
                height: 100%;
                width: 100%;
                vertical-align: middle;
                letter-spacing: 3px;
                list-style: none outside;
                
                
               
            }

            .sublist {
                font-size: 0.5em;
            }

            ul li {
                margin-top: 30px;
                
            }

            a {
                text-decoration: none;
                color: #c7c3c3;
                font-size: 20px;
            }

            a:hover {
                color: #888585;
            }

            {/* .close {
                position: relative;
                top: 15px;
                right: 32px;
                color: white;
                cursor: pointer;

            } */}

        `}</style>
        </>

     );
}
 
export default Navbar;