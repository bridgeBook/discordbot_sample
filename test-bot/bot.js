const { Client, Events, GatewayIntentBits } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once(Events.ClientReady, (c) => {

  // 起動した時に"Ready!"とBotの名前をコンソールに出力する
  console.log(`Ready! (${c.user.tag})`); 
});

client.on(Events.MessageCreate, (message) => {

  // Botには反応しないようにする
  if (message.author.bot) return;
  if (message.content.includes("~gmusic")) {
  
  // 受け取った値をバックエンドへ投げる

  // URLの切り出し
  var url = message.content;
  var sendUrl = url.substr(7);

  console.log(sendUrl)

    // var request = new XMLHttpRequest();
    // request.open("GET", "URLを入れる", true);
    // request.responseType = "json";

    // // musicAPIにリクエストを投げる
    // var sendURL = str.substr(8);
    // request.send(sendURL);

    // // レスポンスが返ってきた時の処理を記述

    // 受け取った値をEmbedに投げる
  const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
  message.channel.send({ embeds: [exampleEmbed] });
  }
});

client.login(
  "MTEyNDU2NTE0MjkyMzkwNzEyMw.GScI7R.__-ASZqukV2atsam71qEuWYNPPIxc3VqM_Fo6Y"
);
