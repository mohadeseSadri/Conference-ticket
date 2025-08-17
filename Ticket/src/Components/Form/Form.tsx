import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function Form() {
  const [email] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    queryClient.setQueryData(['ticket'], formData);
    navigate('../Ticket/designTicket');

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
              <p className="mb-2 mt-3">Full Name</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 mt-3">Email Address</p>
              <div className="flex items-center justify-center">
                <input
                  type="email"
                  className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                  placeholder="example@email.com"
                />
              </div>
              {error && (
                <p className="text-[70%] text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div>
              <p className="mb-2 mt-3">GitHub Username</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="z-[2] mt-3 w-[450px] rounded-lg bg-[#E97464] px-6 py-2 font-bold text-black"
              >
                <Link to="/ticket">Generate My Ticket</Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
