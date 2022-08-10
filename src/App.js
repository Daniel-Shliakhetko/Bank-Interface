import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";

function App() {
  return (
    <div className="w-sreen min-h-screen flex justify-center items-top bg-space-cadet">
      <div className="w-full lg:max-w-[75%]">
        <Header/>
        <main class="px-12 py-4">
        <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
