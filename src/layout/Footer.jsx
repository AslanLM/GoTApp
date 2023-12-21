import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className='img-container img-footer'></div>  
      <div className="footer-content">
        <p>Valar Morghulis, Valar Dohaeris 🐲</p> {/* ⚔️🏰 */}
        <p>
          © 2023 Game of Thrones Web App by:{" "}
          <a
            href="https://github.com/AslanLM/GoTApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            AslanLM
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
