const { Client, Message } = require("discord.js");
const translate = require('@iamtraction/google-translate');
// 

module.exports = {
  name: "translate",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query) {
      return message.reply("Please specify a text to translate");
    } else if (args[0] !== "english") {
      try {
        const translateToEnglish = await translate(query, { to: "en" });
        message.channel.send(translateToEnglish.text);
      } catch (error) {
        console.error(error);
        message.reply("An error occurred while translating the text.");
      }
    }
  },
};
