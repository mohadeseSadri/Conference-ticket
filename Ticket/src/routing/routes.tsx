import { createBrowserRouter } from "react-router-dom";
import DesignTicket from "../Components/Ticket/designTicket";
import App from "../App";

const router = createBrowserRouter([
  { path: "conference-ticket/", element: <App /> },
  { path: "conference-ticket/ticket/", element: <DesignTicket /> },
]);

export default router;
