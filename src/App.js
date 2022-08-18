import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-sreen min-h-screen flex justify-center items-top bg-space-cadet pt-12">
        <div className="w-full absolute top-0 left-0 flex justify-center bg-space-cadet z-40">
          <Header />
        </div>
        <div className="w-full lg:max-w-[75%]">
          <main className="py-4 mb-4 h-full flex items-center justify-center last:w-full">
            <Router />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
