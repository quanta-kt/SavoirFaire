import landing from "../imgs/landing1.jpg";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const TagLine = ({ text }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
      <h1 className="font-custom text-bold text-4xl  text-blue-500 animate-fade-right animate-duration-[2000ms]">
        EZProperty
      </h1>
      <p className="text-2xl font-bold text-white animate-fade-right animate-duration-[2000ms]">
        {text}
      </p>
    </div>
  );
};

export default function Landing() {
  return (
    <>
      <div className="w-full h-full relative">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: `url(${landing})`,
            backgroundSize: "cover",
            position: 'sticky',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 blur"></div>
        <TagLine text="Where Property Dreams become instant Reality!" />
        {/* <h1 className="animate-character">EXProperty</h1> */}
        
      </div>
      <div>
        <div className="h-100 w-100">
          <h1>Hello there</h1>
          <h1>Hello there</h1>
   
        </div>
        <Footer />
      </div>
    </>
  );
}
