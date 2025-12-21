import PatternLogo from "../PatternLogo";
import PatternTop from "../PatternTop";
function Header() {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div>
            <PatternLogo />

          <div className="mt-lg-4 mt-2 flex items-center justify-center">
            <h1 className="text-center font-black md:text-4xl sm:text-2xl text-lg">
              Your Journey to Coding Conf 2025 starts Here!
            </h1>
          </div>

          <div className=" flex items-center justify-center">
            <p className="text-center md:text-xl text-xs">
              Secure your spot at next year's biggest coding conference
            </p>
          </div>
        </div>
      </div>
      <PatternTop />
    </>
  );
}

export default Header;
