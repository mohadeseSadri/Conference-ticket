<link rel="stylesheet" href="./HeaderTicket.css" />;
import UserInformation from "./UserInformation";

function HeaderTicket() {
  const { data: ticket } = UserInformation();
  if (!ticket) return <div>Loading...</div>;

  return (
    <>
      <div className="mt-5 flex items-center justify-center">
        <div>
          <h1 className="text-3xl text-center [&>p]:my-0">
            Congrats,
            <span className="px-1 text-[#F57463] text-nowrap h-[2rem]">{ticket.name}!</span>
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
