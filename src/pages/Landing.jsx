import landing from "../imgs/landing.jpg";

const TagLine = ({ text }) => {
  return (
    <>
      <div class="container1">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> EZProperty</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Landing() {
  return (
    <>
      <div className="w-full h-full container">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: `url(${landing})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="overlay "></div>
        <TagLine />
      </div>
    </>
  );
}
