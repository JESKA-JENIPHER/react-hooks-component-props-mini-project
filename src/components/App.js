import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      
      <About image={blogData.image} about={blogData.about}/>  
      <ArticleList posts={blogData.posts}/>
      <Header name={blogData.name}/>
    </div>
  );
}

export default App;
