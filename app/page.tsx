import React from "react";
import TopicCard from "./components/Cards/Topic-Card";
import ThemeSwitcher from "./components/ThemeSwitcher";

const page = () => {
  return (
    <div>
      <ThemeSwitcher />
      <TopicCard
        heading="Make things float in air"
        totalQuestions={20}
        completedQuestions={5}
        linkUrl="https://twitter.com/mannupaaji"
      />
    </div>
  );
};

export default page;
