const SectionC = () => {
    return ( 
        <>
        <div className="containerBg">
            <div className="containerText">
            <h3>CREATING BEAUTIFUL LIVING SPACES</h3>
            <p>Unalome works with architects and interior designers to bring to life contract and custom furniture and fittings for luxury hospitality and residential projects. Our catalogue of indoor and outdoor furniture is available for wholesale partners worldwide and we welcome custom design requests.</p>
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

         p {
             padding-top: 20px;
             line-height: 30px;
         }
     
        `}
     </style>
     </>
     );
}
 
export default SectionC;