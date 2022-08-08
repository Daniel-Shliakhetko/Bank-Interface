import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";

function App() {
  return (
    <div className="w-sreen min-h-screen flex bg-space-cadet">
      <div className="mx-auto w-full md:w-2/3">
        <Header/>
        <Router />
      </div>
    </div>
  );
}

export default App;
