const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "C:/Users/gabil/Desktop/יהלומ/React project/TestsProject/YahalomTestsServer/data/jsonAsDb.json";


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
    const newQuestion = { Id: biggestId + 1, Type: question.Type, Title: question.Title, CorrectAns: question.CorectAns, Answer1: question.Answer1, Answer2: question.Answer2, Answer3: question.Answer3, Answer4: question.Answer4, Tags: question.Tags};
    data.push(newQuestion);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newQuestion;
  }

  async removeQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    delete data.question;
    await writeFile(jsonFileName, JSON.stringify(data));
  }
}

module.exports = new DBQuestionsRepository();
