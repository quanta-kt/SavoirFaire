// import React from "react";

const Demopage = () => {
  return (
    <>
      <nav>
        <a href="#main" id="about">
          About
        </a>
        <a href="#images1">Images</a>
        <a href="#ppl">Panel</a>
        <a href="#last">Colleges</a>
      </nav>
      <header>
        <center id="center1">
          <br />
          <br />
          <h1>Goshegaon</h1>
          <br />
          <h4>चला बदल घडवुया..!</h4>
        </center>
      </header>
      <div id="main">
        <div id="empty"></div>
        <div id="one">
          <div id="a">Features of the village</div>
          <div id="b">
            point 1<br />
            point 2
          </div>
        </div>
        <div id="empty"></div>
        <center>
          <h2>Top Places</h2>
        </center>
        <div id="images">
          <img src="/agri5.jpg" alt="agri img" />
          <img src="/imgs/agri4.jpg" alt="agri img" />
          <img src="/imgs/agri7.jpg" alt="agri img" />
          <img id="req" src="/imgs/agri3.jpg" alt="agri img" />
        </div>
        <div id="empty"></div>
        <div id="empty"></div>
        <div id="empty"></div>
        <div id="images1">
          <div className="img" id="pic1">
            <div className="centered">
              <h2>Centered</h2>
            </div>
          </div>
          <div className="img" id="pic2">
            <div className="centered">
              <h2>Centered</h2>
            </div>
          </div>
          <div className="img" id="pic3">
            <div className="centered">
              <h2>Centered</h2>
            </div>
          </div>
          <div className="img" id="pic4">
            <div className="centered">
              <h2>Centered</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="main2">
        <div id="side">
          <div id="bg"></div>
          <div id="nobg">Sononrffn fgjgmrkg </div>
        </div>
        <br />
        <br />
        <center>
          <h2>Straight from our Passengers</h2>
        </center>
        <br />
        <br />
        <div id="ppl">
          <div id="pp1">
            <div id="content1">
              <i className="fa-sharp fa-solid fa-quote-left"></i>
            </div>
          </div>
          <div id="pp2">
            <div id="content">
              <i className="fa-sharp fa-solid fa-quote-left"></i>
            </div>
          </div>
          <div id="pp3">
            <div id="content1">
              <i className="fa-sharp fa-solid fa-quote-left"></i>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div id="last">
          <div id="last1">
            The ultimate village destination is here
            <br />
            come experience us
          </div>
          <div id="last2">
            See you soon,
            <br />
            Very Soon,
            <br />
            Very very soon
          </div>
        </div>
        <div id="p">
          <p>
            The village, Goshegaon is an ancient village which has its roots
            from the times of Lord Rama. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam doloremque accusantium adipisci est, eius
            omnis dolore, repellendus sit amet rerum recusandae distinctio! Odio
            ullam nisi sequi voluptatem dolor saepe maiores?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            iusto dolorem incidunt laudantium eaque harum fuga reiciendis
            quaerat, excepturi soluta quidem hic unde error asperiores
            voluptates culpa? Delectus, saepe molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            consectetur nam laboriosam exercitationem consequuntur, sint at
            perspiciatis deserunt placeat corrupti temporibus porro commodi
            excepturi, architecto sed culpa soluta maxime esse.
          </p>
        </div>
      </div>

      <footer>
        <br />
        <br />
        <section className="across">
          <div id="across1">
            Connect with us
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div id="across2">
            Locations
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div id="across3">
            Seo
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div id="across4">
            Schools
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </section>
        <center id="cursive">Made with ❤️ by @Pratik_Mohite</center>
        <center id="cursive">
          Connect at{" "}
          <a href="mailto:pratikmohite1401@gmail.com">
            pratikmohite1401@gmail.com
          </a>
        </center>
        <br />
        <br />
      </footer>
    </>
  );
};

export default Demopage;
