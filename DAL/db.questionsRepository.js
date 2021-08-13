const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "C:/Users/gabil/Desktop/ExampleReact/YahalomTestsServer/data/jsonAsDb.json";

class DBQuestionsRepository {
  async getAllQuestions() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((question) => question.Id)
    );
    const newQuestion = { Id: biggestId + 1, Title: question.Title, CorrectAns: question.CorectAns, Answer1: question.Answer1, Answer2: question.Answer2, Answer3: question.Answer3, Answer4: question.Answer4};
    data.push(newQuestion);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newQuestion;
  }
}

module.exports = new DBQuestionsRepository();
