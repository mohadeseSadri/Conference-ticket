import Logo from "../assets/Images/logo-full.svg";

function PatternLogo() {
  return (
    <div className="flex items-center justify-center">
      <img src={Logo} alt="Logo" className="mt-4 md:w-[28%] sm:w-[30%] w-[35%]" />
    </div>
  );
}

export default PatternLogo;
