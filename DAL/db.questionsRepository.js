const data = require("../helpers/jsonAsDb.json");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const jsonFileName = "./helpers/jsonAsDb.json";

class DBQuestionsRepository {
  getAllQuestions() {
    return data;
  }

  async addQuestion(question) {
    data.push({ id: data.length + 1, title: question.title });
    return await writeFile(jsonFileName, JSON.stringify(data));
  }
}

module.exports = new DBQuestionsRepository();
