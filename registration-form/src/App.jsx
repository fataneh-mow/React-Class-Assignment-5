import "./index.css";
import './App.css';
import Register from "./components/Register";

function App() {
  return(
    <div className="flex items-center justify-center">
      <div className="w-1/3 mx-12 my-12 rounded-lg shadow-lg bg-gray-50 border border-gray-100 p-6">
        <div>
          <h1 className="font-semibold text-xl text-gray-900">Welcome to My Website!</h1>
          <p className="text-md my-1.5 text-gray-800">Here you can register yourself via a dynamic form empowered with react!</p>
        </div>
        <Register />
      </div>
    </div>
    
  )
}

export default App;