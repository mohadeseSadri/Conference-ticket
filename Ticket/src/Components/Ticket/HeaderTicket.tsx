function HeaderTicket() {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="relative z-[2]">
          <h1 className="flex">
            Congrats,
            <span></span>
            Your ticket is ready.
          </h1>

          <p className="flex mt-5">
            We've emailed your ticket to
            <span></span>
            and will send updates in the run up to the event.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderTicket;
