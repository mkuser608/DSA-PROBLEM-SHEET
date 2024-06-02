import { getData, getFilteredData } from "../database/db";
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

interface FilterCriteria {
  topicName?: string;
  done?: boolean;
  bookmark?: boolean;
}

// Function to get filtered topics
export const getFilteredTopics = async (
  filters: FilterCriteria
): Promise<Topic[]> => {
  try {
    const topics: Topic[] = await getFilteredData(filters);
    return topics;
  } catch (error) {
    console.error("Error fetching filtered topics:", error);
    throw new Error("Failed to fetch filtered topics");
  }
};
