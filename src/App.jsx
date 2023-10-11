import "./App.css";
import Tasks from "./Components/Tasks/Tasks.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
