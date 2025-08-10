import Form from "./Components/Form/Form"
import Header from "./Components/Form/Header"
import PatternBottomDesktop from "./Components/PatternBottomDesktop"
import UploadAvatar from "./Components/Form/UploadAvatar"
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
