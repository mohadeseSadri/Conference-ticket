import Form from "./Components/Form/Form";
import Header from "./Components/Form/Header";
import PatternBottomDesktop from "./Components/PatternBottom";
import UploadAvatar from "./Components/Form/UploadAvatar";
import Background from "./Components/Background";
import "./App.css";
import DesignTicket from "./Components/Ticket/designTicket";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/result" element={<DesignTicket />} />
        </Routes>
        <PatternBottomDesktop />
      </main>
    </>
  );
}

export default App;
