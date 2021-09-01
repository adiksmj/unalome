const SectionB = () => {
    return ( 
        <>
        <div className="containerBg">
            <div className="containerText">
            <h3>SCANDINAVIAN DESIGNS MEETS INDONESIAN ARTISANSHIP AND MATERIALS.</h3>
            <h3 className="paddingh3">BASED ON THE ISLAND OF THE GODS, BALI.</h3>
            </div>
        </div>
        <style jsx>{`
         .containerBg {
             background-color: #ebebeb;
             Width: 100%;
             height: auto;
             text-align: center;
             
         }

         .containerText {
             width: 55%;
             height: auto; 
             padding-top: 150px;
             padding-bottom: 150px;
             display: inline-block;
         }
        

         h3 {
             margin: auto;
             
           
         }

         .paddingh3 {
             padding-top: 40px;
         }
     
        `}
     </style>
     </>
     );
}
 
export default SectionB;