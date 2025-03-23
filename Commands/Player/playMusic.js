const { SlashCommandBuilder } = require("discord.js");
const { Downloader } = require('ytdl-mp3');
const path = require("path");


async function F(x) {
  const Y = new Downloader({ 
    getTags: true,
    outputPath: path.join(__dirname, "./Main/Tmp") // Define o local de download
  });
  const X = await Y.downloadSong(x);
  return X.outputFile;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("music")
        .setDescription("Baixar Music Supported platforms are YouTube;")
        .addStringOption(option =>
            option.setName("add_link")
                .setDescription("Digite o link do music")
                .setRequired(true)
        ),

        async execute(interaction) {
        try {
            const S = interaction.options.getString("add_link");
            await interaction.deferReply(); // Adia a resposta
            const M = await F(S);

            if (!M) {
        throw new Error("Falha ao obter o arquivo de música.");
      }

            await interaction.editReply({ 
              content: " ✅ Aqui está sua musica:", 
              files: [M]                            
            });

        } catch (e) {
            console.error(e);
            await interaction.editReply({ content: `❌ Erro ao obter a music: ${e.message}` });
        }
    },
};
