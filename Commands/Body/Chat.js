const { SlashCommandBuilder } = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const AI = new GoogleGenerativeAI("AIzaSyC6nJ91agGlAhsMg0Ad92AzUfdky4YmjN0");
const model = AI.getGenerativeModel({ model: "gemini-1.5-flash" });

module.exports = { 
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("retorna uma messagem")
    .addStringOption( string => string
      .setName("Input")
      .setDescription("Digite Sua Pergunta")
      .setRequired(true)               
     ),

 async execute (interaction) {
   try {
      const I = interaction.options.getString("Input");
      const result = await model.generateContent(I);
      const R = result.response.text();
      await interaction.reply(R);
     
    } catch (e) {
     await interaction.reply("error a retornar messagem");
    }  
  },
};
