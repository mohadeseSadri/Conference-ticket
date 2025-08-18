import Background from "../Background";
import PatternLogo from "../PatternLogo";
import PatternTop from "../PatternTop";
import HeaderTicket from "./HeaderTicket";
import TicketDetails from "./TicketDetails";

function DesignTicket() {
  return (
    <>
      <Background />
      <PatternTop />
      <div className="relative z-[2]">
        <PatternLogo />
        <HeaderTicket />
        <TicketDetails/>
      </div>
    </>
  );
}

export default DesignTicket;
