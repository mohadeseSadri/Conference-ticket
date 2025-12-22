<link rel="stylesheet" href="./HeaderTicket.css" />;
import { useLocation } from "react-router-dom";

function HeaderTicket() {

  const location = useLocation();
  const data = location.state;
  if (!data) return <p>Data not</p> ;

  return (
    <>
      <div className="sm:mt-5 mt-3 flex items-center justify-center">
        <div>
          <h1 className="sm:text-3xl text-lg text-center px-2 [&>p]:my-0">
            Congrats,
            <span className="px-1 text-[#F57463] text-nowrap h-[2rem]">{data.name}!</span>
            Your ticket is ready.
          </h1>

          <div className="p-4 text-center sm:text-lg text-sm [&>p]:my-0">
            <p> We've emailed your ticket to</p>
            <p className="px-1 text-[#F57463]">{data.email}</p>
            <p>and will send updates in the run up to the event.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTicket;
