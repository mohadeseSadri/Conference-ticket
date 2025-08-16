import PatternLogo from "../PatternLogo";
import PatternTop from "../PatternTop";
function Header() {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div>
            <PatternLogo />

          <div className="mt-4 flex items-center justify-center">
            <h1 className="text-center text-4xl font-black">
              Your Journey to Coding Conf 2025 starts Here!
            </h1>
          </div>

          <div className="mt-3 flex items-center justify-center">
            <p className="text-center">
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
