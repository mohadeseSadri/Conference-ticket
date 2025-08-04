import Form from "./Components/Form"
import Header from "./Components/Header"
import PatternBottomDesktop from "./Components/PatternBottomDesktop"
import UploadAvatar from "./Components/UploadAvatar"

function App() {
  

  return (
    <>
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
