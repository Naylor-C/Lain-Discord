const { GoogleGenerativeAI } = require("@google/generative-ai");
const AI = new GoogleGenerativeAI("AIzaSyC6nJ91agGlAhsMg0Ad92AzUfdky4YmjN0");
const model = AI.getGenerativeModel({ model: "gemini-1.5-flash" });

module.exports =



const prompt = "Explain how AI works";
const result = await model.generateContent(prompt);
console.log(result.response.text());
