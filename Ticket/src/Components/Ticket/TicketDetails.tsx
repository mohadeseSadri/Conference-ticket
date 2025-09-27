import PatternTicket from "../../assets/Images/pattern-ticket.svg";
import logo from "../../assets/Images/logo-mark.svg";
import GithubIcon from "../../assets/Images/icon-github.svg";
import { useRandomNumber } from "./RandomNumberContext";
import { useLocation } from "react-router-dom";

function TicketDetails({ ticketDate = new Date() }: { ticketDate?: Date }) {
  const formattedDate = ticketDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const location = useLocation();
  const data = location.state;
  if (!data) return <p>Data not</p> ;

  const { randomNumber } = useRandomNumber();

  return (
    <>
      <div className="relative mt-5 mx-4 flex items-center justify-center">
        <img src={PatternTicket} alt="" />
        <div className="absolute z-[3] flex">
          <div>
            <div className="mr-[11rem] mb-[1rem] sm:mr-[15rem] sm:mb-[2rem]">
              <div className="flex">
                <img src={logo} alt="" className="mb-[2rem]" />
                <div>
                  <h2 className="ml-[1rem] font-semibold">Coding Conf</h2>
                  <p className="ml-[1rem]">{formattedDate}</p>
                </div>
              </div>
            </div>

            <div className="[&>p]:my-0">
              <p>{data.name}</p>
              <div className="flex">
                <img src={GithubIcon} alt="" />
                <p className="px-2 pt-3">{data.userName}</p>
              </div>
            </div>
          </div>

          <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            <p className="text-2xl mt-[3rem] text-gray-400">#{randomNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetails;
