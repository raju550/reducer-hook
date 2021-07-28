import "./App.css";
import PatientManagement from "./PatientManagement/PatientManagement";
import ReducerCount from "./ReducerCount";

function App() {
  return (
    <div className="App">
      <h1>Use reducer hook</h1>
      <ReducerCount />
      <PatientManagement />
    </div>
  );
}

export default App;
