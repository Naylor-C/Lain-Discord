const { SlashCommandBuilder, EmbedBuilder } = require("discord,js");
const { createAudioPlayer } = require('@discordjs/voice');
const player = createAudioPlayer();

module.exports = {
   data: new SlashCommandBuilder()
   .setName("play-video")
   .setDescription("Retorn is Menu"),
   
   async execute (interaction) 
   {
    const E = EmbedBuilder()
    .setColor(0x0099FF)

    await interaction.reply({embed: [E]});

    
   }

};
