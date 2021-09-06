const SectionG = () => {
    return ( 
        <>
        <div className="containerBg">
            <div className="containerText">
            <a href="">
                READ WHAT THEY SAY ABOUT US
            </a>
            </div>
        </div>
        <style jsx>{`
         .containerBg {
             background-color:  #77777e;
             Width: 100%;
             height: 200px;
             text-align: center;
             position: relative;
             
         }

         .containerText {
             width: 55%;
             height: auto; 
             padding-top: 90px;
             display: inline-block;
             margin: auto;
         }
        

         a {
             display: inline;
             font-family: "RoundedElegance";
             margin: auto;
             padding: 25px 50px 23px;
             font-size: 15px;
             color: #c7c3c3;
             border: 2px solid #c7c3c3;
             border-radius: 3px;
             text-decoration: none;
             
             
           
         }

        
     
        `}
     </style>
     </>
     );
}
 
export default SectionG;