import onClickUrl from "../OnClickUrl";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
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
          <i
            class="fa-brands fa-instagram fa-3x"
            onClick={onClickUrl("https://instagram.com/adityapatel149")}
          ></i>
        </div>
        <p>A website by Aditya Patel</p>
      </div>
    </section>
  );
};

export default Footer;
