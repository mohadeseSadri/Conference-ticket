import logo from "../../assets/Images/logo-full.svg";
import PatternTop from "../PatternTop";
function Header() {
  return (
    <>
      <div className="flex items-center justify-center display:inline-block; position: relative">

        <div className="display:inline-block; position:absolute; ml-[340px]">

          <div className="flex items-center justify-center mt-3">
            <div className="flex gap-4">
              <img src={logo} alt="logo"/>
              
            </div>
          </div>

          <div className="flex items-center justify-center mt-3">
            <h1 className="text-4xl font-black text-center">
              Your Journey to Coding Conf 2025 starts Here!
            </h1>
          </div>

          <div className="flex items-center justify-center mt-3">
            <p className="text-center">
              Secure your spot at next year's biggest coding conference
            </p>
          </div>
        </div>

        <PatternTop />
      </div>
    </>
  );
}

export default Header;
