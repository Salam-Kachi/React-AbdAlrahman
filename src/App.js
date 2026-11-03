import { Button, Post } from "./components";

function App() {
  return (
    <>
      <Button title="Apple" />
      <Button title="Samsung" />
      <Button title="RealMe" />
      <div style={{ display: "flex",justifyContent: "space-between", flexWrap: "wrap", marginTop: "20px" }}>
      <Post title="My First Post" description="This is the description for my first post." />
      <Post title="My Second Post" description="This is the description for my Second post." />
      <Post title="My Third Post" description="This is the description for my Third post." />
      <Post title="My Fourth Post" description="This is the description for my Fourth " />
      </div>
    </>
  );
}

export default App;
