import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
