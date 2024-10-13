import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Welcome to react-redux</h1>
      {/* <Counter /> */}
      <Todos />
    </>
  );
}

export default App;

// Step 1 : install packages
// Step 2 : constants define
// Step 3 : async action creator
// Step 4 : reducer function
// Step 5 : create store
// Step 6 : Provide store
// Step 7 : Use store
// Step 8 : Adding css
