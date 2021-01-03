// const data = require("../data/jsonAsDb.json");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/jsonAsDb.json";

class DBQuestionsRepository {
  async getAllQuestions() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    data.push({ id: data.length + 1, title: question.Title });
    return await writeFile(jsonFileName, JSON.stringify(data));
  }
}

module.exports = new DBQuestionsRepository();
