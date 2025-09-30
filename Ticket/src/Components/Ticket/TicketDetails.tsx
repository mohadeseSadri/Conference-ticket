import PatternTicket from "../../assets/Images/pattern-ticket.svg";
import logo from "../../assets/Images/logo-mark.svg";
import GithubIcon from "../../assets/Images/icon-github.svg";
import { useRandomNumber } from "./RandomNumberContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type RegisterFormData = {
  name: string;
  userName: string;
  avatar: File | null;
};

function TicketDetails({ ticketDate = new Date() }: { ticketDate?: Date }) {
  const formattedDate = ticketDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const location = useLocation();

  const data = location.state as RegisterFormData | undefined;

  console.log("Received data:", data);

  const { randomNumber } = useRandomNumber();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    if (data?.avatar) {
      const url = URL.createObjectURL(data.avatar);
      console.log("Preview URL:", url);
      setAvatarUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [data?.avatar]);

  return (
    <>
      <div className="relative mx-4 mt-5 flex items-center justify-center">
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

            <div className="[&>p]:my-0 flex">
              {avatarUrl && (
                <img
                  src={avatarUrl as string}
                  alt="Uploaded Avatar"
                  className="mr-3 h-20 w-20 rounded-lg object-cover shadow-md"
                />
              )}
              <section>
                <h4>{data?.name}</h4>
                <div className="flex">
                  <img src={GithubIcon} alt="GithubIcon" />
                  <p className="px-2 pt-3">{data?.userName}</p>
                </div>
              </section>
            </div>
          </div>

          <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            <p className="mt-[3rem] text-2xl text-gray-400">#{randomNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetails;
