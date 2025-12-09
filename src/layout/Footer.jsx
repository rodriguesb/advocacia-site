import '../styles/footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer-premium">
        <div className="footer-container">

          <div className="footer-info">
            <strong>Misllene Silva Santos</strong>
            <span>OAB/SP 531.965</span>
            <p>Mauá/SP</p>
          </div>

          <div className="footer-contact">
            <p>📞 (11) 97717-9302</p>
            <p>✉ misllenesantos.adv@gmail.com</p>
          </div>

        </div>
      </footer>

      <a
        href="https://wa.me/5511977179302"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        Falar no WhatsApp
      </a>
    </>
  )
}
