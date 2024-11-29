import { Header } from "./Component/Header";
import { Certificates } from "./pages/certificate";
import { Contact } from "./pages/contact";
import { Education } from "./pages/education";
import { Home } from "./pages/home";
import { Portfolio } from "./pages/portfolio";
import { Skills } from "./pages/skills";

import "./app.css"
function App() {
  return (
    <>
    <Header/>
    <main>
      <Home/>
      <Skills/>
      <Education/>
      <Certificates/>
      <Portfolio/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
