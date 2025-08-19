import PatternTicket from "../../assets/Images/pattern-ticket.svg";
import logo from "../../assets/Images/logo-mark.svg";
import UserInformation from "./UserInformation";
import GithubIcon from "../../assets/Images/icon-github.svg";
import { useRandomNumber } from "./RandomNumberContext";

function TicketDetails({ ticketDate = new Date() }: { ticketDate?: Date }) {
  const formattedDate = ticketDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { data: ticket } = UserInformation();
  if (!ticket) return <div>Loading...</div>;

  const { randomNumber } = useRandomNumber();

  return (
    <>
      <div className="relative mt-5 flex items-center justify-center">
        <img src={PatternTicket} alt="" />
        <div className="absolute z-[3] flex">
          <div>
            <div className="mr-[18rem] mb-[5rem]">
              <div className="flex">
                <img src={logo} alt="" className="mb-[2rem]" />
                <div>
                  <h2 className="ml-[1rem] font-semibold">Coding Conf</h2>
                  <p className="ml-[1rem]">{formattedDate}</p>
                </div>
              </div>
            </div>

            <div className="[&>p]:my-0">
              <p>{ticket.name}</p>
              <div className="flex">
                <img src={GithubIcon} alt="" />
                <p className="px-2 pt-3">{ticket.githubId}</p>
              </div>
            </div>
          </div>

          <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            <p className="text-2xl mt-[5rem] text-gray-400">#{randomNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetails;
