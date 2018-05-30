import React from "react";
import Layout from "./components/Layout";
import CardList from "./components/Card/CardList";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <CardList list={artists} />
      </Layout>
    );
  }
}

const artists = [
  {
    id: "5441c29d-3602-4898-b1a1-b77fa23b8e50",
    name: "David Bowie",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/c7324cdbc5d76ed5e15f19b6e5099a2b.png",
    likes: 200,
    comments: 6
  },
  {
    id: "b071f9fa-14b0-4217-8e97-eb41da73f598",
    name: "The Rolling Stones",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/adad8079a3b3ceb58b8ae8c944b74bfc.png",
    likes: 200,
    comments: 6
  },
  {
    id: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
    name: "Radiohead",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/9b109fcab6c48f5714c8554a31ab9943.png",
    likes: 200,
    comments: 6
  },
  {
    id: "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
    name: "Coldplay",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/76b29fb461e74a48bab4686e0269421b.png",
    likes: 200,
    comments: 6
  },
  {
    id: "420ca290-76c5-41af-999e-564d7c71f1a7",
    name: "Queen",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/072d804d466f45529bccac349b0f8281.png",
    likes: 200,
    comments: 6
  },
  {
    id: "fd857293-5ab8-40de-b29e-55a69d4e4d0f",
    name: "Muse",
    image:
      "https://lastfm-img2.akamaized.net/i/u/64s/d8086eeaf019b743e9f8d390771729e5.png",
    likes: 200,
    comments: 6
  }
];
