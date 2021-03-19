import { BrowserRouter as Router } from "react-router-dom";
import AppWithRoutes from "./Router/AppWithRoutes/AppWithRoutes";

function App() {
  return (
    <>
      <Router>
        <AppWithRoutes />
      </Router>
    </>
  );
}

export default App;
