import Navbar from "../components/Navbar";
import landing from "../imgs/landing1.jpg";

const TagLine = ({ text }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
      <h1 className="font-custom text-extrabold text-[5rem]  text-blue-500 animate-fade-right animate-duration-[2000ms] animate-character">
        EZProperty
      </h1>
      <p className="text-2xl font-extrabold text-white animate-fade-right animate-duration-[2000ms]">
        {text}
      </p>
    </div>
  );
};

const Demopage = () => {
  return (
    <>
      <Navbar />

      <header>
        <div className="w-full h-full relative">
          <div
            className="w-full h-full "
            style={{
              backgroundImage: `url(${landing})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 blur"></div>
          <TagLine text="Where Property Dreams become instant Reality!" />
        </div>
      </header>

      <div id="main">
        <div id="empty"></div>
        <div id="images1">
          <div className="img" id="pic1">
            <div className="centered">
              <h2>Ready to move Apartments</h2>
            </div>
          </div>
          <div className="img" id="pic2">
            <div className="centered">
              <p>130+ Properties</p>
            </div>
          </div>
          <div className="img" id="pic3">
            <div className="centered">
              <h2>Budget Buys</h2>
            </div>
          </div>
          <div className="img" id="pic4">
            <div className="centered">
              <h2>Real-Time updates</h2>
            </div>
          </div>
        </div>
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
