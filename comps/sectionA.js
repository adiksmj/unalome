const SectionA = () => {
    return ( 
        <>
        <div className="containerBg">
            <div className="containerText">
            <h3>ECO-FRIENDLY, COMMERCIAL FURNITURE PRODUCTION</h3>
            <p>Unalome is an eco-friendly furniture company headquartered in Bali. We provide contract furniture design and production for sustainably driven commercial and residential projects, delivered worldwide.</p>
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
         }
     
        `}
     </style>
     </>
     );
}
 
export default SectionA;