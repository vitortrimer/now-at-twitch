import React from "react";
import Stream from "../components/stream/Stream";

const streams = [
  {
    id: 13,
    name: "Alanzoka",
    title:
      "Jogando e fazendo graça DAISAOIDNSAIOD SAOIDNJSAIDSA DASIONDOISAD OSA",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 9,
    name: "robcdee",
    title: "Walking thru Ikebukuro",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 8,
    name: "Hirowdots",
    title: "memes",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 7,
    name: "Mundo Freak Confidencial",
    title: "react",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 12,
    name: "Alanzoka",
    title: "Jogando e fazendo graça",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 11,
    name: "Alanzoka",
    title: "Jogando e fazendo graça",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
  {
    id: 10,
    name: "Alanzoka",
    title: "Jogando e fazendo graça",
    picture: "https://tm.ibxk.com.br/2021/10/25/25182009625424.jpg",
    viewers: 154,
    game: "Dark Souls III",
  },
];

function Home() {
  return (
    <div>
      <h1>Now live streamers</h1>
      {streams.map((stream) => (
        <Stream key={stream.id} stream={stream} />
      ))}
    </div>
  );
}

export default Home;
