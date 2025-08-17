import { useQuery } from "@tanstack/react-query";
<link rel="stylesheet" href="./HeaderTicket.css" />;

interface Ticket {
  name: string;
  email: string;
}

function HeaderTicket() {
  const { data: ticket } = useQuery<Ticket>({
    queryKey: ["ticket"],
    queryFn: () => {
      return { name: "Mohaddese", email: "mohadesehsadr788@gmail.com" };
    },
  });

  if (!ticket) return <div>تیکتی یافت نشد!</div>;

  return (
    <>
      <div className="mt-5 flex items-center justify-center">
        <div className="relative z-[2]">
          <h1 className="flex">
            Congrats,
            <span className="text-[#F57463] px-1">{ticket.name}!</span>
            Your ticket is ready.
          </h1>

          <div className="p-4 text-center [&>p]:my-0">
            <p> We've emailed your ticket to</p>
            <p className="px-1 text-[#F57463]">{ticket.email}</p>
            <p>and will send updates in the run up to the event.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTicket;
