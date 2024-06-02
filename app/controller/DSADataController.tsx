import { getData } from "../database/db";
import { Topic } from "../data/450DSA";

// Function to get all topics
export const getAllTopics = async (): Promise<Topic[]> => {
  try {
    const topics: Topic[] = await getData();
    return topics;
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw new Error("Failed to fetch topics");
  }
};

// Function to filter topics based on topicName, Bookmarks, and done
// export const filterTopics = async (
//   topicName?: string,
//   Bookmark?: boolean,
//   Done?: boolean
// ): Promise<Topic[]> => {
//   try {
//     let topics: Topic[] = await getData();

//     // Apply filters if provided
//     if (topicName) {
//       topics = topics.filter((topic) => topic.topicName === topicName);
//     }
//     if (Bookmark !== undefined) {
//       const isBookmark = Bookmark;
//       topics = topics.filter((topic) =>
//         topic.questions.some((question) => question.Bookmark === isBookmark)
//       );
//     }
//     if (Done !== undefined) {
//       const isDone = Done;
//       topics = topics.filter((topic) =>
//         topic.questions.some((question) => question.Done === isDone)
//       );
//     }

//     return topics;
//   } catch (error) {
//     console.error("Error filtering topics:", error);
//     throw new Error("Failed to filter topics");
//   }
// };
