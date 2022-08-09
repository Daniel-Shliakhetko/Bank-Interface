import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";

function App() {
  return (
    <div className="w-sreen min-h-screen flex bg-space-cadet">
      <div className="mx-auto w-full md:w-3/4">
        <Header/>
        <main class="p-12">
        <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
