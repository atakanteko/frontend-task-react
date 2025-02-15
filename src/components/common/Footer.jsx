import React from "react";

function Footer() {
    return(
        <footer className="bg-primary text-center text-lg-start position-fixed bottom-0 w-100">
            <div className="text-center p-3 text-white fw-bold" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer;