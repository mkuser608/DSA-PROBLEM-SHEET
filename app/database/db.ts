import Localbase from "localbase";
import QuestionData, { Topic } from "@/app/data/450DSA";

let db = new Localbase("db");
db.config.debug = false;

export function insertData(callback: () => void) {
  QuestionData.forEach((topic) => {
    const key = topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
    db.collection("450dsaArchive").add(topic, key);
  });
  getData().then(callback);
}

export function getData(): Promise<Topic[]> {
  return db
    .collection("450dsaArchive")
    .get()
    .then((data) => {
      if (data && data.length > 0) {
        return data;
      } else {
        // If no data found, insert and then retrieve again
        return new Promise((resolve, reject) => {
          insertData(() => {
            getData().then(resolve).catch(reject);
          });
        });
      }
    });
}

export function getTopicData(key: string): Promise<any> {
  return db.collection("450dsaArchive").doc(key).get();
}

export function updateDBData(key: string, updateData: any): Promise<void> {
  return db.collection("450dsaArchive").doc(key).update(updateData);
}

export function resetDBData(): Promise<void> {
  return db.collection("450dsaArchive").delete();
}

export function exportDBData(): Promise<any[]> {
  return db.collection("450dsaArchive").get();
}

export function importDBData(data: Topic[]): Promise<void> {
  return resetDBData().then(() => {
    return new Promise((resolve) => {
      data.forEach((topic, index) => {
        const key = topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
        db.collection("450dsaArchive").add(topic, key);
      });
      getData().then(resolve);
    });
  });
}

interface FilterCriteria {
  topicName?: string;
  done?: boolean;
  bookmark?: boolean;
}

export async function getFilteredData(
  filters: FilterCriteria
): Promise<Topic[]> {
  const allTopics: Topic[] = await getData();
  return allTopics.filter((topic) => {
    return (
      (!filters.topicName ||
        convertStringToUrl(topic.topicName).includes(filters.topicName)) &&
      topic.questions.some(
        (question) =>
          (filters.done === undefined || question.Done === filters.done) &&
          (filters.bookmark === undefined ||
            question.Bookmark === filters.bookmark)
      )
    );
  });
}

const convertStringToUrl = (input: string): string => {
  let lowerCaseString = input.toLowerCase();
  let replacedString = lowerCaseString.replace(/&/g, "and");
  replacedString = replacedString.replace(/\s+/g, "-");
  return replacedString;
};
