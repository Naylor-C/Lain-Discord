const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Replies with menu!'),
    async execute(interaction) {
     const Menu = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Menu')
      .setURL('https://discord.js.org/')
      .setAuthor({ name: 'Lain-IA', iconURL: "https://i.ibb.co/r2ZPwg2Q/images.jpg", url: 'https://discord.js.org' })
      .setDescription('Bem-Vindo Ao Menu de Commands')
      .setThumbnail('https://i.ibb.co/TMhK0Bwk/40177153-lain-wallpapers.jpg')
      .addFields(
        { name: 'Maneger', value: 'Config from Server && Canais' },
        { name: 'Chat', value: 'Pergunte o que quiser', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B', value: '\u200B' },
       
      )
      .addFields({ name: '\u200B', value: '\u200B' })
      .setImage("https://i.ibb.co/4wzkc4Fz/61-Kow0-R4-DEL-AC-UF894-1000-QL80.jpg")
      .setTimestamp()
      .setFooter({ text: 'Criado por Naylor-C', iconURL: 'https://i.ibb.co/r2ZPwg2Q/images.jpg' });

      await interaction.reply({ embeds: [Menu] });
    },
};
