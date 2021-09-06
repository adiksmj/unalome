import Image from 'next/image';

const Navbar = () => {
    return ( 
        <>
        <nav className="container">
            <div className="logo">
                <Image src="/unalome.png" width="180" height="70"/>
            </div>
        </nav>
        <style jsx>{`
        .container {
            background: #77777e;
            width: 100%;
            height: 70px;
            position: fixed;
            top: 0;
            z-index: 99;
            }

            .logo {
            
            display: inline-block;
            margin-left: 25px;
            }

        `}</style>
        </>

     );
}
 
export default Navbar;