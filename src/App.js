import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="w-sreen min-h-screen flex justify-center items-top bg-space-cadet">
      <div className="w-full lg:max-w-[75%]">
        <Header />
        <main className="py-4 mb-8 h-[calc(100vh - 5rem)] flex items-center justify-center last:w-full">
          <Router />
        </main>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
