import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../componentes/header";
import { Separator } from "../componentes/Separator";
import { Tweet } from "../componentes/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Tweet",
    "Deu certo!",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit (event: KeyboardEvent){
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/manuelalange.png" alt="Manuela Lange" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
