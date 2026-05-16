import {Phone, Mail, GitHub, LinkedIn} from "@mui/icons-material"
import "../componentStyles/Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* Section 1 */}
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <p><Phone fontSize="small"/>Phone : +919840882044</p>
          <p><Mail fontSize="small"/>Email : abhijth@gmail.com</p>
        </div>

        {/* Section 2 */}
        <div className="footer-section social">
          <h3>Follow me</h3>
          <div className="social-links">
            <a href="https://github.com/Abhijith1234567890" target="_black">
              <GitHub className="social-icon"/>
            </a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFNURd-IrVyVwAAAZ4vov_AKugLbgpmSf0CC_4QV1vSwA_S_03YjXwsJYHgmAIifnUkVXtlKBPaAveMZcQsou03aQRxlUzW8QCRvQLBPBjMXafx5_slkoDW_VIRhPYciu2JT3g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabhijith-p-p2001" target="_black">
              <LinkedIn className="social-icon"/>
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