import { Button, Post } from "./components";

function App() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      desc: "This is the description for my first post.",
    },
    {
      id: 2,
      title: "My Second Post",
      desc: "This is the description for my Second post.",
    },
    {
      id: 3,
      title: "My Third Post",
      desc: "This is the description for my Third post.",
    },
    {
      id: 4,
      title: "My Fourth Post",
      desc: "This is the description for my Fourth post.",
    },
  ];
  return (
    <>
      <Button title="Apple" />
      <Button title="Samsung" />
      <Button title="RealMe" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {posts.map((post) => {
          return <Post id={post.id} title={post.title} desc={post.desc} />;
        })}
      </div>
    </>
  );
}

export default App;
