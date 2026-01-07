import onClickUrl from "../OnClickUrl";


export default function Hero() {
  const emailId = "imadityapatel149@gmail.com";

  function sendEmail() {
    window.location = `mailto:${emailId}`;
  }

  return (
    <section className="hero">
      <div className="main">
        <h1>Aditya Patel</h1>
              <h3>Researches | Engineers | Designs | Deploys </h3>
              <h3>AI and ML Powered Products</h3>
        </div>
          <div className="social">
              <i
                  class="fa-brands fa-github fa-3x"
                  onClick={onClickUrl("https://github.com/adityapatel149")}
              ></i>
              <i
                  class="fa-brands fa-linkedin fa-3x"
                  onClick={onClickUrl("https://linkedin.com/in/adityapatel149")}
              ></i>
              <i
                  class="fa-brands fa-dribbble fa-3x"
                  onClick={onClickUrl("https://dribbble.com/AdityaPatel149")}
              ></i>
          </div>
      <button className="primary-button" onClick={sendEmail}>
        <div className="btn-inside">
          <div className="btn-inside2">Contact me</div>
        </div>
      </button>
    </section>
  );
}
