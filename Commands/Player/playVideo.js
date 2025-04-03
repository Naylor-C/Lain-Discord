const { SlashCommandBuilder } = require("discord.js");
const { alldl } = require("rahad-all-downloader");

async function F (x) {
    try {
        const response = await alldl(x);

        if (!response || response.error) {
            console.error("Erro ao baixar o vídeo:", response?.error || "Resposta vazia");
            return null;
        }

        return response;
    } catch (e) {
        console.error("Erro ao processar o download:", e.message);
        return null;
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("video")
        .setDescription("download vídeo")
        .addStringOption(X => X
            .setName("add_link")
                .setDescription("Digite o link do vídeo")
                .setRequired(true)
        ),

    async execute(interaction) {
        try {
            const S = interaction.options.getString("add_link");
            await interaction.deferReply(); // Adia a resposta

            const R1 = await F(S);

            // Verifica se houve erro ao obter o vídeo
            if (!R1 || !R1.data || !R1.data.videoUrl) {
                return await interaction.editReply({ content: "❌ Não foi possível obter o vídeo. Verifique se o link é válido e suportado." });
            }

            const V = R1.data.videoUrl;
            console.log("Vídeo encontrado:", V);

            await interaction.editReply({ 
            	content: " ✅ Aqui está o vídeo:", 
              files: [`${V}`]                            
            });

        } catch (e) {
            console.error(e);
            await interaction.editReply({ 
             content: `❌ Erro ao obter o vídeo: ${e.message} Baixar vídeo Supported platforms are YouTube, Facebook, TikTok, Pinterest, Terabox, Instagram, Threads, and Twitter.` 
            });
        }
    },
};
