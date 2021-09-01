import Image from 'next/image';

const Navbar = () => {
    return ( 
        <>
        <nav className="container">
            <div className="logo">
                <Image src="/unalome.png" width="200" height="80"/>
            </div>
        </nav>
        </>

     );
}
 
export default Navbar;