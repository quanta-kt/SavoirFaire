import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import landing from "../imgs/landing1.jpg";
import { Navigate, useNavigate } from "react-router";

const TagLine = ({ text }) => {
  const Navigate = useNavigate();
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
      <h1 className="font-custom text-extrabold text-[5rem]  text-blue-500 animate-fade-right animate-duration-[2000ms] animate-character title">
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
      {/* Header above */}
      <div id="main">
        <div id="empty"></div>
        <div id="images1" style={{ textAlign: "center" }}>
          <div className="img rounded-lg" id="pic1">
            <div className="centered">
              <h2>Ready to move Apartments</h2>
            </div>
          </div>
          <div className="img rounded-lg" id="pic2">
            <div className="centered">
              <p>130+ Properties</p>
            </div>
          </div>
          <div className="img rounded-lg" id="pic3">
            <div className="centered">
              <h2>Budget Buys</h2>
            </div>
          </div>
          <div className="img rounded-lg" id="pic4">
            <div className="centered z-10">
              <h2>&nbsp;Real-Time updates</h2>
            </div>
          </div>
        </div>
        {/* Now we move towards the features */}
        <div id="empty"></div>
        <section id="one">
          <div id="a">
            <div className="carousel w-full h-full rounded-tl-lg rounded-bl-lg">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glass rounded-tr-lg rounded-br-lg text-white p-5 text-xl"
            id="b"
          >
            {/* <ul>
              <li>• MAP YOUR PROPERTIES</li>
              <li>• GET REAL TIME PROPERTY NOTIFICATIONS</li>
              <li>• BOOK YOUR HOUSE</li>
              <li>• PROPERTIES AT YOUR FINGERTIPS</li>
            </ul> */}
            <ul>
              <li>• Instant updates on available properties.</li>
              <li>
                • Real-time notifications for newly listed properties matching
                your criteria.
              </li>
              <li>• Interactive map view to visualize property locations.</li>
              <li>• Advanced search filters for precise property selection.</li>
              <li>• Seamless booking process for selected properties.</li>
              <li>
                • Integration with digital payment systems for secure
                transactions.
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* <div id="main2">
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
      </div> */}
      <div className="flex justify-center items-center w-full my-[120px]">
        <Link className="btn btn-primary btn-lg px-24" to="/login">
          Signup
        </Link>
      </div>
    </>
  );
};

export default Demopage;
