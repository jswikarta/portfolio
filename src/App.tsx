import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="bg-[#0e162a]">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
