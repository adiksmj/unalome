const BurgerMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    });
    
    return ( 
    <>
    <div>
        <div className="menu-btn">
            <div className="menu-btn__burger"></div>
        </div>
    </div>
    <style jsx>{`
    
        
    .menu-btn {
        position: relative;
        float: right;
        top: 4px;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: all .5s ease-in-out;
        z-index: 99;
        
        
        
    }
    .menu-btn__burger {
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
        background: #c7c3c3;
        
    }
    .menu-btn__burger::before, .menu-btn__burger::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
        background: #c7c3c3;
    }
    .menu-btn__burger::before {
        transform: translateY(-12px);
    }
    .menu-btn__burger::after {
        transform: translateY(12px);
    }
        /* ANIMATION */
    .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }
    .menu-btn.open .menu-btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .menu-btn.open .menu-btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }
    
    `}</style>
    </>
    );
}
 
export default BurgerMenu;