import React from "react";
import TopicCard from "./components/Cards/Topic-Card";
import { dataSchema } from "./utils/ValidationData";
import data from "./data/450DSA";
import TopicCardBentGrid from "./components/grids/TopicCardBentGrid";

const HomePage = () => {
  return (
    <div>
      <TopicCardBentGrid />
      <div>Hello</div>
    </div>
  );
};

export default HomePage;
