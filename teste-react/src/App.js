import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVazio, setInputVazio] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    if (inputValue === "" ) { // Adiciona um texto avisando que o post esta vazio
      setInputVazio(true) 
    } else { // Adiciona um post à lista
      setInputVazio(false) 
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
    };

    const newPostsList = [newPost, ...postsList];
    
    setPostsList(newPostsList);
    setInputValue("")}
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
        <p data-testid={"numeroDePosts"}>Numero de posts: {postsList.length} </p>
      </div>
      <br />
      <div>
        {inputVazio === true ? (<p>Voce nao pode criar um post vazio</p>) : (<p></p>)}
        {postsList.length === 0 ? (<p>Nenhum Post</p>) :
          (postsList.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                toggleLike={toggleLike}
                deletePost={deletePost}
              />
            )
          }))}
      </div>
    </div>
  );
};

export default App;
