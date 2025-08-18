import { useQuery } from "@tanstack/react-query";

export interface Ticket {
  name: string;
  email: string;
  githubId: string;
}

function UserInformation() {
  return useQuery<Ticket>({
    queryKey: ["ticket"],
    queryFn: () => {
      return {
        name: "Mohaddese Sadri",
        email: "mohadesehsadr788@gmail.com",
        githubId: "@mohadeseSadri ",
      };
    },
  });
}

export default UserInformation;
