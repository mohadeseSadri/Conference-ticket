import Form from "./Components/Form"
import Header from "./Components/Header"
import PatternBottomDesktop from "./Components/PatternBottomDesktop"
import UploadAvatar from "./Components/UploadAvatar"
import Background from "./Components/Background"
import "./App.css"

function App() {
  

  return (
    <>
    <Background />
    <header>
          <Header />
      </header>
      <main>
        <UploadAvatar />
        <Form />
        <PatternBottomDesktop />
      </main>
    </>
  )
}

export default App
