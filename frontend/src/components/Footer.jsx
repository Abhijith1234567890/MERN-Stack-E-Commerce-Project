import {Phone, Mail, GitHub, LinkedIn, YouTube, Instagram} from "@mui/icons-material"
import "../componentStyles/Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* Section 1 */}
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <p><Phone fontSize="small"/>Phone : +91984788204432</p>
          <p><Mail fontSize="small"/>Email : abhijthpp2001@gmail.com</p>
        </div>

        {/* Section 2 */}
        <div className="footer-section social">
          <h3>Follow me</h3>
          <div className="social-links">
            <a href="" target="_black">
              <GitHub className="social-icon"/>
            </a>
            <a href="" target="_black">
              <LinkedIn className="social-icon"/>
            </a>
            <a href="" target="_black">
              <YouTube className="social-icon"/>
            </a>
            <a href="" target="_black">
              <Instagram className="social-icon"/>
            </a>
          </div>
        </div>

        {/* Section 3 */}
        <div className="footer-section about">
          <h3>About</h3>
          <p>Providing web develepment tutorials and courses to help you grow your skills.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Abhijith . All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer