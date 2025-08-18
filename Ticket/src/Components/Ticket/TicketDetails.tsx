import PatternTicket from "../../assets/Images/pattern-ticket.svg";
import logo from "../../assets/Images/logo-mark.svg";

function TicketDetails({ ticketDate = new Date() }: { ticketDate?: Date }) {
  const formattedDate = ticketDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="relative mt-5 flex items-center justify-center">
        <img src={PatternTicket} alt="" />
        <div className="absolute z-[3] mr-[18rem] mb-[10rem]">
          <div className="flex">
            <img src={logo} alt="" className="mb-[2rem]" />
            <div>
              <h2 className="ml-[1rem] font-semibold">Coding Conf</h2>
              <p className="ml-[1rem]">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetails;
