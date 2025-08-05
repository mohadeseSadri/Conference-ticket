import { useState } from "react";

function Form() {
  const [email, ] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    setError("");
    console.log("Email is valid:", email);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center justify-center">
          <div>
            <div>
              <p className=" mt-3 mb-2">Full Name</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
                />
              </div>
            </div>

            <div>
              <p className="mt-3 mb-2">Email Address</p>
              <div className="flex items-center justify-center">
                <input
                  type="email"
                  className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
                  placeholder="example@email.com"
                />
              </div>
              {error && <p className="text-red-500 text-[70%]">Please enter a valid email address</p>}
            </div>

            <div>
              <p className=" mt-3 mb-2">GitHub Username</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[450px] bg-[#E97464] mt-3 rounded-lg px-6 py-2 text-black font-bold z-[2]"
              >
                Generate My Ticket
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
