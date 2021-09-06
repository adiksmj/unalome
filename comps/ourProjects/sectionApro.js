const SectionAPro = () => {
    return ( 
        <>
        <div className="containerBg">
            <div className="containerText">
            <h3>UNA <span className="underBelow">P</span>ROJECTS</h3>
            <p>Hospitality & Resorts</p>
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
             padding: 50px 0px;
             display: inline-block;
         }
        

         h3 {
             margin: auto;
             
           
         }

         p {
             padding-top: 20px;
         }

         .underBelow {
            text-decoration: underline;
            text-decoration-color: #44649f;
            text-decoration-thickness: 15% !important;
            text-underline-position: under;
         }
     
        `}
     </style>
     </>
     );
}
 
export default SectionAPro;