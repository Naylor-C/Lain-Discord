const { SlashCommandBuilder } = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const AI = new GoogleGenerativeAI("AIzaSyC6nJ91agGlAhsMg0Ad92AzUfdky4YmjN0");
const model = AI.getGenerativeModel({ model: "gemini-1.5-flash" });

module.exports = { 
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("retorna uma messagem")
    .addStringOption((string) => string
      .setName("input")
      .setDescription("Digite Sua Pergunta")
      .setRequired(true)               
     ),

 async execute (interaction) {
   try {
      const I = interaction.options.getString("input");
      await interaction.deferReply();
      const result = await model.generateContent(I);
      const R1 = result.response.text();
      const R2 = R1.slice(0, 1980);
      // Enviar a resposta de volta ao usuário
      await interaction.followUp(R2);
     
    } catch (e) {
      console.log(e);
     await interaction.followUp("error a retornar messagem");
    }  
  },
};
