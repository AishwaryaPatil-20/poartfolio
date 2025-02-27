import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="element">
          <h2>Aishwarya Patil</h2>
          <p>I am  a Full-Stack Web developer with a strong background in both front-end and back-end technologies I specialize in building dynamic, responsive web applications using HTML, CSS, JavaScript, and modern frameworks like React ,Angular ,Nextjs. On the server side, I’m proficient in Node.js,Java , Python, and database management with MongoDB and SQL.</p>
        </div>

        <div className="element" style={{ marginLeft: '150px' }}>
          <h2>Important Links</h2>
          <ul>
            <li >Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="element">
          <h2>Personal Details</h2>
          <div className="box">
            <i className="fa-solid fa-location-dot"></i>
            <p>At.Shejabahulgav Tal-Mohol Dis-Solapur-413253</p>
          </div>

          <div className="box">
            <i className="fa-solid fa-phone"></i>
            <p>(+91)8329****13</p>
          </div>

          <div className="box">
            <i className="fa-solid fa-envelope"></i>
            <p>aishwaryap049@gmail.com</p>
          </div>
        </div>

        

        {/* Social Media Section */}
        <div className="element social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
           
            <a href="https://www.linkedin.com/in/aishwarya-patil-8b11a827b" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/AishwaryaPatil-20" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <p>&copy; Developed by aishwarya_patil 2025</p>
      </div>
    </>
  );
}
