import Logo from "../assets/Images/logo-full.svg";

function PatternLogo() {
  return (
    <div className="flex items-center justify-center">
      <img src={Logo} alt="Logo" className="mt-5" />
    </div>
  );
}

export default PatternLogo;
