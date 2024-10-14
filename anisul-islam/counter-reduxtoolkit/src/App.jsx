import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";

function App() {
  return (
    <>
      <h1>Counter App - Redux Toolkit</h1>
      <CounterView />
      <PostView />
    </>
  );
}

export default App;
