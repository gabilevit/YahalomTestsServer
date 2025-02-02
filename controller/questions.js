const db = require("../DAL/db.questionsRepository.js");

class QuestionsController {
  // Get Questions
  getAllQuestions() {
    return db.getAllQuestions();
  }

  // Add question to the list
  addQuestion(question) {
    if (!question.Title) throw "question has no title";
    return db.addQuestion(question);
  }

  removeQuestion(question) {
    if (!question) throw "no question";
    return db.removeQuestion(question);
  }
}

module.exports = new QuestionsController();
