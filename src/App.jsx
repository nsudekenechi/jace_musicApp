import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <div className="grid grid-cols-6  md:px-10 h-[100vh] gap-x-10">
        <div className="col-span-1 ">
          <Nav />
        </div>
        <div className="col-span-5 ">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
