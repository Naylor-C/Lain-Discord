const { Events } = require('discord.js');
const config = require('./json/config.json'); // Importa a lista de servidores permitidos

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		// Verifica se o servidor está na lista de permitidos
		if (!config.allowedServers.includes(member.guild.id)) {
			console.log(`Servidor ${member.guild.name} (${member.guild.id}) não está autorizado.`);
			return;
		}

		// Obtemos as informações do servidor e do usuário
		const serverName = member.guild.name;
		const userTag = member.user.tag;
		const serverDescription = member.guild.description || "Este servidor não tem descrição.";

		// Mensagem de boas-vindas personalizada
		const welcomeMessage = `👋 Olá, ${userTag}! Bem-vindo(a) ao **${serverName}**!\n\n📌 **Descrição do servidor:** ${serverDescription}\n🎉 Aproveite sua estadia!`;

		// Definir canal de boas-vindas (systemChannel ou um canal chamado 'geral')
		const welcomeChannel = member.guild.systemChannel || member.guild.channels.cache.find(ch => ch.name === 'geral');

		// Enviar mensagem se o canal for encontrado
		if (welcomeChannel) {
			welcomeChannel.send(welcomeMessage).catch(console.error);
		} else {
			console.warn(`Nenhum canal de boas-vindas encontrado no servidor: ${serverName}`);
		}
	},
};
