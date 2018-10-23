const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`احبك مرة`,"https://www.twitch.tv/dark_legend_1003")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose: سيرفر جميل ومرتب بس مظلوم بالتفاعل :rose: 

*:small_orange_diamond: السيرفر عادة جديد ووصل 102ومظلوم بالدعم ونبي نوصله 500 عشان نسوي جيف اواي علي كردتس وحسابات جميلة وشكراً.. :rose: :small_orange_diamond: *
                               [ https://discord.gg/nm852f7 ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose: سيرفر جميل ومرتب بس مظلوم بالتفاعل :rose: 

*:small_orange_diamond: السيرفر عادة جديد ووصل 102ومظلوم بالدعم ونبي نوصله 500 عشان نسوي جيف اواي علي كردتس وحسابات جميلة وشكراً.. :rose: :small_orange_diamond: *
                               [ https://discord.gg/nm852f7 ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)  
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
