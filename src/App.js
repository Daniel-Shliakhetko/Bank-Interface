import "./App.scss";
import { Router } from "./Router";
import { Header } from "./partials/Header";

function App() {
  return (
    <div className="w-sreen min-h-screen flex justify-center items-top bg-space-cadet">
      <div className="w-full lg:max-w-[75%]">
        <Header />
        <main className="py-4 h-[calc(100vh - 5rem)] flex items-center justify-center last:w-full">
          <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
