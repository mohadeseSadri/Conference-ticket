import { createBrowserRouter } from "react-router-dom";
import DesignTicket from "../Components/Ticket/designTicket";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ticket", element: <DesignTicket /> },
]);

export default router;
