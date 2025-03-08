const { SlashCommandBuilder, }= require("discord.js");

module.exports = {
   data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban user")

    .addUserOption((A) => A
     .setName("user")
     .setDescription("select user")
     .setRequired(true)
    )
    .addStringOption((X) => X 
     .setName("reason")
     .setDescription("reason of ban")
     .setRequired(true) 
    ),

   async execute (interaction) {
    try {
      const U = interaction.options.getUser("user");
      const S = interaction.options.getString("reason");

      await interaction.guild.members.ban(U, { reason: S });
      await interaction.reply({ content:`{U.tag} foi banido com sucess`, ephemeral: true });
    } 
    catch (e) {
      await interaction.reply({ content:`return:${e}`, ephemeral: true});
    }

   },

};
