import Image from 'next/image';

const Navbar = () => {
    return ( 
        <>
        <nav className="container">
            <div className="logo">
                <Image src="/unalome.png" width="200" height="80"/>
            </div>
        </nav>
        <style jsx>{`
        .container {
            background: #77777e;
            width: 100%;
            height: auto;
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