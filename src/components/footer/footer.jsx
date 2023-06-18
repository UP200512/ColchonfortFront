import React from "react";
import './footer.css'


function Footer(){
    return(
        
        <footer className="wrap-footer">
            <section className="info ">
                <div className="networks">
                <p>Aqui va facebook</p>
                <p>Aqui va instak</p>
                </div>
                <div className='general'>
                    <p>info del lugar</p>
                </div>
                <div className="otros">
                    <p>otros</p>
                </div>
            </section>
        </footer>
        
    ); 
}


export default Footer;