// app/page.tsx
import { z } from "zod";
import { dataSchema } from "./utils/ValidationData";
import data from "./data/450DSA";

interface Question {
  Topic: string;
  Problem: string;
  Done: boolean;
  Bookmark: boolean;
  Notes?: string;
  URLs: string[];
}

interface Topic {
  topicName: string;
  position: number;
  started: boolean;
  doneQuestions: number;
  questions: Question[];
}

async function getData(): Promise<Topic[]> {
  const validationResult = dataSchema.safeParse(data);

  if (!validationResult.success) {
    console.error("Validation failed:", validationResult.error.errors);
    throw new Error("Data validation failed");
  }

  return validationResult.data;
}

const HomePage = async () => {
  const topics = await getData();

  return (
    <div>
      {topics.map((topic) => (
        <div
          key={topic.position}
          style={{
            border: "1px solid #ccc",
            margin: "1em",
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          <h2>{topic.topicName}</h2>
          <ul>
            {topic.questions.map((question, index) => (
              <li key={index}>
                <a
                  href={question.URLs[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {question.Problem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
