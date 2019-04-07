const Discord = require('discord.js');
const bot = new Discord.Client();
const { stripIndents } = require('common-tags');
const client = new Discord.Client();




const token =(process.env.TOKEN);
let prefix = "+";





client.on("ready", () => {


  console.log("Je suis prêt !");

});
   




const validStatus = ["idle","dnd","online"];
setInterval(() => { bot.user.setStatus(`${validStatus[Math.floor(Math.random() * validStatus.length)]}`)}, 3000);

const humeur = ["741 Users","ZéphyrDev","+help" , "Se Faire Coder xD"];
setInterval(() => { bot.user.setGame(`${humeur[Math.floor(Math.random() * humeur.length)]}`)}, 3000);



 
bot.on("message", (message) => {
    var author = message.author.id;
    var args = message.content.split(' ').slice(1);



    if (message.content.startsWith(prefix + "ping")) {
        message.reply("Pong  :ping_pong: " ).then(msg => {
            msg.react("👌")
            
        

        });
    } else if (message.content.startsWith(prefix + "info")) {

        let embed = new Discord.RichEmbed()

        .setTitle("Information de " + bot.user.tag)
            .setDescription(":robot:")
            .setColor("RANDOM")
            .addField("Nom", bot.user.username, true)
            .addField("Discriminator", "#" + bot.user.discriminator, true)
            .addField("Users", bot.users.size, true)
            .addField("Bots", bot.users.filter(user => user.bot).size, true)
            .addField("Channels", bot.channels.size, true)
            .addField("Servers", bot.guilds.size, true)
            .addField("Bot créé le" , bot.user.createdAt , true)
            .addField("Développeur" , "Zéphyr" , true)
            .addField("UpTime", (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds.", true)
            .setThumbnail(bot.user.avatarURL)
            .setTimestamp()
            .setFooter("Information-bot")
        message.channel.send({ embed })
    }
 
//ban

if(message.content.startsWith(prefix+"ban") || message.content.startsWith(prefix+"Ban") || message.content.startsWith(prefix+"BAN")) { 
  var moment = require("moment"); 
  var banMember = message.guild.member(message.mentions.users.first()); 
  var lapersonnee = message.guild.member(message.mentions.users.first());  
       if(lapersonnee === null){
         return message.channel.send("", {embed: {     
          title: "Error: ",     
          color: 0xff0000,     
          description: ":warning: Veuillez mentionner un utilisateur valide ! :warning: ",  
          timestamp: new Date(),   footer: {   text: 'Ban Command'   },           
          thumbnail: {       
              url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"         
          },                    
      }});   
     }     
     if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {        
      return message.channel.send("", {embed: {     
       title: "Error: ",     color: 0xff0000,    
       description: ":warning: Je n'ai pas la permission ! :warning: ",  
       timestamp: new Date(),   
       footer: {   
          text: 'Ban Command'
},
    thumbnail: {
url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"
  },

  }});
}
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS") && message.author.id != "317733390256308224"){
  return message.channel.send("", {embed: {
title: "Error: ",
color: 0xff0000,
description: ":warning: Vous n'avez pas la permission !:warning: ",
timestamp: new Date(),
footer: {
text: 'Ban Command'
},
    thumbnail: {
url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"
  },

  }});
}
if(banMember.highestRole.position >= message.member.highestRole.position){
  return message.channel.send("", {embed: {
    title: "Error:",
    color: 0xff0000,
    description: "Vous ne pouvez pas ban ce membre il est supérieur à vous ! :zap:",
     timestamp: new Date(),
footer: {
text: 'Ban Command'
},
  }}).catch(console.error);
}
 const data = bot.channels.get(message.channel.id);
   var temps = moment(data.created).format("LLLL");
   var banMember = message.guild.member(message.mentions.users.first());
   banMember.ban().then(member => {
  return message.channel.send("", {embed: {
title: "Succès ! ",
color: 0x00FF00,
description: ""+banMember.user.username+" a bien été ban par "+message.author.username,
timestamp: new Date(),
footer: {
text: 'Ban Command'
},
    image: {
              url: "http://i.imgur.com/O3DHIA5.gif"
          },

         

  }});
  
           
           
});
const user = message.mentions.users.first()
var banembed = new Discord.RichEmbed()
  .addField("Action" , "Ban")
  .setColor('RANDOM')
  .addField("Utilisateur" , `${user.username}#${user.discriminator}`) 
  .addField("Modérateur" , `${message.author.username}#${message.author.discriminator}`)
  .addField("Raison" , args.join(" ").slice(22))
  let banchaneel = message.guild.channels.find(`name`, "logs");
   banchaneel.send(banembed)
             
}


if(message.content.startsWith(prefix+"kick") || message.content.startsWith(prefix+"Kick") || message.content.startsWith(prefix+"KICK")) { 
  var moment = require("moment"); 
  var kickMember = message.guild.member(message.mentions.users.first()); 

       if(kickMember === null){
         return message.channel.send("", {embed: {     
          title: "Error: ",     
          color: 0xff0000,     
          description: ":warning: Veuillez mentionner un utilisateur valide ! :warning: ",  
          timestamp: new Date(),   
          footer: {   
              text: 'kick Command'   },           
          thumbnail: {       
              url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"         
          },                    
      }});   
     }     
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS") && message.author.id != "335488729328123905"){
      return message.channel.send("", {embed: {     
       title: "Error: ",     color: 0xff0000,    
       description: ":warning: Je n'ai pas assez de permissions ! :warning: ",  
       timestamp: new Date(),   
       footer: {   
          text: 'Kick Command'
},
    thumbnail: {
url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"
  },

  }});
}
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS") && message.author.id != "335488729328123905"){
  return message.channel.send("", {embed: {
title: "Error: ",
color: 0xff0000,
description: ":warning: Vous n'avez pas la permission  !:warning: ",
timestamp: new Date(),
footer: {
text: 'Kick Command'
},
    thumbnail: {
url: "https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png"
  },

  }});
}
if(kickMember.highestRole.position >= message.member.highestRole.position){
  return message.channel.send("", {embed: {
    title: "Error:",
    color: 0xff0000,
    description: "Vous ne pouvez pas kick ce membre il est supérieur à vous :zap:",
     timestamp: new Date(),
footer: {
text: 'Kick Command'
},
  }}).catch(console.error);
}
 const data = bot.channels.get(message.channel.id);
   var temps = moment(data.created).format("LLLL");
   kickMember.kick().then(member => {
  return message.channel.send("", {embed: {
title: "Succès ! ",
color: 0x00FF00,
description: ""+kickMember.user.username+" a bien été kick par "+message.author.username,
timestamp: new Date(),
footer: {
text: 'Kick Command'
},
    image: {
              url: "http://i.imgur.com/O3DHIA5.gif"
          },

  }});
});
const user = message.mentions.users.first()
var kickembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("Action" , "Kick")
  .addField("Utilisateur" , `${user.username}#${user.discriminator}`) 
  .addField("Modérateur" , `${message.author.username}#${message.author.discriminator}`)
  .addField("Raison" , args.join(" ").slice(22))
  let kickchaneel = message.guild.channels.find(`name`, "logs");
   kickchaneel.send(kickembed)
}




if(message.content.startsWith(prefix + "clear")) {
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");

  let args = message.content.split(" ").slice(1);

  if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
  message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**${args[0]} messages ont été supprimés !** :white_check_mark:`);
  });
  var clearembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("Action" , "Clear")
  .addField("Nombre de messages supprimés" , `${args[0]}`) 
  .addField("Modérateur" , `${message.author.username}#${message.author.discriminator}`)
  .addField("Clear dans le salon" , message.channel)
  let clearchaneel = message.guild.channels.find(`name`, "logs");
   clearchaneel.send(clearembed)

}

if(message.content.startsWith(prefix + "mute")) {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

  if(message.mentions.users.size === 0) {
      return message.channel.send('Vous devez mentionner un utilisateur !');
  }

  var mute = message.guild.member(message.mentions.users.first());
  if(!mute) {
      return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
  }


    if(message.content.startsWith(prefix+"invite")){
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("**:robot:Ceci est le lien pour m'ajouter sur un serveur !: [Click ici](https://discordapp.com/oauth2/authorize?client_id=508612366125105153&scope=bot&permissions=8)**\n\n**Rejoinds mon discord support ! :zap:\n===================================================\n\n:smile:-Bon Support !\n:tools:-Bon développeur !\n\n===================================================\n\n- :link: Lien d'invitation :link: -\nhttps://discord.gg/jg5qMMT**")
    .setImage("https://images-ext-1.discordapp.net/external/nHACs_SuSz1V_eX8RRqvfni0Bs0z8eT90gjoyjaqTm0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/508253132338364416/f5a88ebd301bc0a2e8cffe8a6f647f02.jpg?width=473&height=473")
    .setThumbnail(bot.user.avatarURL)
    message.author.send({embed})
    message.reply("**Regarde tes messages privés ! :mailbox_with_mail: **");
}





      //mute
      if(message.content.startsWith(prefix + 'mute')){
        let defineduser = message.mentions.users.first();
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
            message.channel.send ("📛 Tu n'as pas la permission 📛");
            console.log("📛 Tu n'as pas la permission 📛");
            return;
          }
          else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_ROLES")) {
            message.channel.send ("📛 Je n'ai pas la permission 📛");
            console.log("📛 Je n'ai pas la permission 📛");
            return;
          }
          if(message.mentions.users.size === 0){
            return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez mute**")
          }
          let muteMember = message.guild.member(message.mentions.users.first());
          if(!muteMember){
            return message.channel.send("**:x: Cet utilisateur n'est certainement pas valide**")
          }
          message.channel.overwritePermissions(muteMember, {SEND_MESSAGES: false}).then(member => {
            message.channel.send(defineduser.username+" **a bien été mute**");
            let muteEmbed = new Discord.RichEmbed()
               .setDescription("~Mute~")
               .setColor("#e56b00")
               .addField("Utilisateur mute", `${defineduser.username}`)
               .addField("Mute par", `${message.author.username}`)
               .addField("Mute dans ", message.channel)
               .addField("Le", message.createdAt)
               .setTimestamp()
               .setFooter(`Mute`);
               let incidentchannel = message.guild.channels.find(`name`, "logs");
               if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs```.");
               incidentchannel.send(muteEmbed)
             })
           }

           if(message.content.startsWith(prefix + 'unmute')){
            let defineduser = message.mentions.users.first();
            if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
              message.channel.send ("📛 Tu n'as pas la permission 📛");
              console.log("📛 Tu n'as pas la permission 📛");
          return;
        }
        else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_ROLES")) {
            message.channel.send ("📛 Je n'es pas la permission 📛");
            console.log("📛 Je n'es pas la permission 📛");
          return;
        }
        if(message.mentions.users.size === 0){
			return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez unmute**")
	}
    let unmuteMember = message.guild.member(message.mentions.users.first());
    if(!unmuteMember){
      return message.channel.send("**:x: Cet utilisateur est invalide !**")
    }
    message.channel.overwritePermissions(unmuteMember, {SEND_MESSAGES: true, READ_MESSAGES: true}).then(member => {
      message.channel.send(defineduser.username + " **a bien été unmute**" );
      let unmuteEmbed = new Discord.RichEmbed()
             .setDescription("~Unmute~")
             .setColor("#e56b00")
             .addField("Utilisateur unmute", `${defineduser.username}`)
             .addField("Unmute par", `${message.author.username}`)
             .addField("Unmute dans ", message.channel)
            .addField("Le", message.createdAt)
            .setTimestamp()
            .setFooter(`Unmute`);
            let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs```.");
    incidentchannel.send(unmuteEmbed)
  })
}





}
//embed_help

if (message.content === '+help') {

  const embed = new Discord.RichEmbed()

    .setTitle('Voici ma liste de commandes !')
    .setThumbnail(message.author.avatarURL)
    .setDescription('Voici mes commandes disponibles ! :smile:')

    .setColor('RANDOM')
    .addField(':tools: Modération ' , 'Fais ``+modo`` pour voir les commandes de modération :wrench: !')
    .addField(':tada: Fun' , 'Fais ``+fun`` pour voir les commandes fun :tada: !')
    .addField(':grinning: Invitations','Fais ``+invite`` pour inviter le bot à rejoindre un serveur ! :ballot_box_with_check: ')
    .addField('🔧Support' , 'Envoie un message privé au bot pour contacter le support !')
    .setFooter('Menu Aide - ZéphyrBot')
    .setTimestamp()
    message.channel.send(embed);
  }

///////////////TATSUMAKI API//////////////////

const Tatsu = require("tatsu.js");
 function emoji (id) {
   return client.emojis.get(id).toString();
 }
var tatsu = new Tatsu("3a9a5ac5d52c60c559c1d2ba20f2944b-e405c129980dd4-4e1ff6d5bfdd4c5602e4d80f153f3946");
tatsu.getUser(message.author.id).then(user => {
if (message.content.startsWith(prefix +"tatsu")) {
var tatsuembed = new Discord.RichEmbed()
.setTitle(`Profile Tatsumaki de ${message.author.username}`)
.setColor("GREEN")
.addField("Utilisateur  " , user.name)
.addField("Level" , user.level)
.addField("XP Total " ,   `${user.total_xp} `)
.addField("Prochain level dans" ,  `(${user.next_level_xp - user.level_xp} xp) `)
.addField("Rang Mondial" , user.rank)
.addField("Réputation" , user.reputation)
.setThumbnail("https://images-ext-1.discordapp.net/external/1zMo4dM_bVvMAeuZIimTqW9YanyZ8ggqomkW-sm5AfE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/172002275412279296/f5f65755f67ae1dc88d9bb271d0f5bef.png")
.addField(" :credit_card: Credits" , user.credits + ":yen:")
.setTimestamp()

message.channel.send(tatsuembed)




              

    }
    
  });

  
  tatsu.getLeaderboard(message.guild.id).then(leaderboard => {
    
    leaderboard.forEach(userlevel => {
      if (message.content.startsWith(prefix +"level all")) {
        
      tatsu.getUser(userlevel.user_id).then(user => {
        var leadembed = new Discord.RichEmbed()
          .addField(user.name , "Level " + user.level)
          
          .setColor('GREEN')
      message.channel.send(leadembed)
     
    });
  }
  });
});
    

        
        


 

//////////////////MONEY///////////////////////




const money = require('discord-money')
const sqlite3 = require('sqlite3')
var moment = require('moment')

if (message.content.toUpperCase() === `${prefix}CREDITS`) {
 
  money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
      message.reply(`** :moneybag: Votre solde :** ${i.money} credits`);
  })


}

// Example: Adding Money To A User
if (message.content.toUpperCase() === `${prefix}ITACHI`) {

  money.updateBal(message.author.id, 500 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.reply(`**Vous avez ajouter $500!**\n** :moneybag: Nouveau solde:** ${i.money} credits`);
  })

}

// Example: Give Sympa
if (message.content.toUpperCase() === `${prefix}BLAH`) {

  money.updateBal(message.author.id, 999999999/* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.reply(`**Vous avez ajouter $500!**\n** :moneybag: Nouveau solde:** ${i.money} credits`);
  })

}

// Example: Removing Money From A User
if (message.content.toUpperCase() === `${prefix}AMENDE`) {

  money.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
      message.channel.send(`**Vous avez payez votre amende de $500!**\n** :moneybag: Nouveau solde:** ${i.money} credits`);
  })

}

 // Example: Getting a daily reward
 if (message.content.toUpperCase() === prefix + `DAILY`) {
  message.delete();
  if (money[message.author.username + message.guild.name] != moment().format('L')) {
      money[message.author.username + message.guild.name] = moment().format('L')
      money.updateBal(message.author.id, 500).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
          message.channel.send({embed: {
              color: 3447003,
              description: 'Vous avez recu vos **500** credits quotidien ! :moneybag:. Tu peux vérifier tes credits \`+credits\`.',
              author: {
                  name: `${message.author.username}#${message.author.discriminator}`,
                  icon_url: message.author.avatarURL 
              }
          }});
      })
  } else {
      message.channel.send({embed: {
          color: 3447003,
          description: 'Vous avez déjà récupéré votre \`+daily`\ quotidien. Check plus tard (00h00) **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
          author: {
              name: `${message.author.username}#${message.author.discriminator}`,
              icon_url: message.author.avatarURL 
          }
      }});
  }
}




  //server
  if (message.content === '+server') {
 
    var server_embed = new Discord.RichEmbed()
    
  
    
  
      .setDescription(':information_source: Information du Serveur Discord ')
  
      .setColor('RANDOM')
      .addField("Nom du discord" , message.guild.name)
      .addField("ID du serveur" , message.guild.id )
      .addField(" :crown: Propriétaire du serveur" , message.guild.owner.user.username)
      .addField("Créé le" , message.guild.createdAt)
      .addField("Tu l'as rejoins le" , message.member.joinedAt)
      .addField("Utilisateurs sur le discord" , message.guild.memberCount)
      .setThumbnail(message.guild.iconURL)
      .setFooter("Info Serveur - ZéphyrBot")
      .setTimestamp()
      message.channel.send(server_embed);
  }


  //stats

  if (message.content.startsWith(prefix +"stats")) {
    var user = message.author
    var stats_embed = new Discord.RichEmbed()
     
   
  

    
      .setTitle(`Statistiques de  ${message.author.username}`)
      .setThumbnail(message.author.avatarURL)
     
  
      .setColor('RANDOM')
      .addField("Pseudo " , message.author.username , true)
      .addField("Discriminator" , message.author.discriminator , true )
      .addField("Date de création de l'utilisateur " , message.author.createdAt , true)
      .addField("ID de l'utilisateur" , message.author.id , true)
      .addField("Jeu" , `${user.presence.game}`)
      .setFooter('Statistiques Utilisateur')
      .setTimestamp()
      message.channel.send(stats_embed);
      
    }


   
  //sondagev2

  if(message.content.startsWith(prefix + "sondage")) {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(" :warning: **Tu n'as pas la permission !**");
    var args = message.content.split(' ').join(' ').slice(8)
  
    if(!args) return message.channel.send(" :warning: **Tu dois poser une question !**")
  
  
    var sondage_embed = new Discord.RichEmbed()
  
    .setColor('RANDOM')
    .addField("Sondage de " , message.author.username  )
    .addField("Question :" , `${args}` , true)
    .addField("✅ " , "Pour Oui" , true)
    .addField("❌ " , "pour Non" , true)
    .setFooter("Sondage")
    .setTimestamp()
    message.channel.send(sondage_embed)
    .then(function(message){
      message.react('❌')
      message.react('✅')
  
    })
    }


    if(message.content.startsWith(prefix+"invite")){
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription("**:robot:Ceci est le lien pour m'ajouter sur un serveur !: [Click ici](https://discordapp.com/oauth2/authorize?client_id=508612366125105153&scope=bot&permissions=8)**\n\n**Rejoinds mon discord support ! :zap:\n===================================================\n\n:smile:-Bon Support !\n:tools:-Bon développeur !\n\n===================================================\n\n- :link: Lien d'invitation :link: -\nhttps://discord.gg/jg5qMMT**")
      .setImage("https://images-ext-1.discordapp.net/external/nHACs_SuSz1V_eX8RRqvfni0Bs0z8eT90gjoyjaqTm0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/508253132338364416/f5a88ebd301bc0a2e8cffe8a6f647f02.jpg?width=473&height=473")
      .setThumbnail(bot.user.avatarURL)
      message.author.send({embed})
      message.reply("**Regarde tes messages privés ! :mailbox_with_mail: **");
  }
  
  
  
  //say
  if (message.content.startsWith (prefix +"say")) {
    var text = message.content.substring(5);
   message.channel.bulkDelete (1)
    message.channel.send (text)
console.log (`${message.author.username} | Say ` + text)
 }

 if (message.content.startsWith( prefix + "say")){
    message.delete();
  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  
    let botmessage = args.join(" ");
  
    message.channel.send(botmessage);
  
  }


//fun

if(message.content.startsWith(prefix + "fun")) {
  var fun_embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(":tada: Voici mes commandes Fun :tada: !")
  .setThumbnail(message.author.avatarURL)
  .addField("+ping", "Savoir le bot si il est en ligne !")
  .addField("+stats ", "Le bot vous envoie des informations sur votre profil !")
  .addField("+info", "Donne des informations sur le bot !")
  .addField("+server" , "Le bot envoie des informations sur le serveur !")
  .addField("+helpcredits" , "Donne la liste des commandes de credits !")
  .addField("+8ball <question>" , "Le bot répond aléatoirement à la question posée")
  .addField("+sondage <question>" , "Le bot créée un sondage avec la question souhaitée")
  .addField("+say <message> ", "Faire dire au bot ce que vous voulez ! " )
  .setFooter("Commande Fun - ZéphyrBot")
  .setTimestamp()
  message.channel.send(fun_embed);
}
 

//helpcredits

if(message.content.startsWith(prefix + "helpcredits")) {
  var fun_embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(" Voici mes commandes de credits !")
  .setThumbnail(message.author.avatarURL)
  .addField("+credits" , "affiche votre solde de credits  :moneybag:")
  .addField("+daily" , "Recevez vos credits quotidiens")
  
  .setFooter("Help Credits - ZéphyrBot")
  .setTimestamp()
  message.channel.send(fun_embed);
}

//report

if (message.content.startsWith(prefix +"report")) { 
  
    

  const user = message.mentions.users.first()
  var reportembed = new Discord.RichEmbed()
 
 .addField("Utilisateur Reporté" , `${user.username}#${user.discriminator}`)
 .setColor('RANDOM')
 .addField("Reporté par" , `${message.author.username}#${message.author.discriminator}`)
 .addField("Reporté dans" , message.channel)
 .addField("Date" , message.createdAt)
 .addField("Raison" , args.join(" ").slice(22))


let reportchannel = message.guild.channels.find(`name`, "reports");
   reportchannel.send(reportembed)
   message.reply("**Report réussi ! :white_check_mark:**")

  }
    




  //----------Rainbow function----------------//


if (message.content.startsWith(prefix + "disco")) {
  const config = require('./config.json')
  const roles = config.roleToDisco;
  const allowedRoles = config.allowedRoles;
  const allowedUsers = config.allowedUsers;

  function Rainbow() {
      let random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      roles.forEach((role) => {
          let theRole = message.guild.roles.find("name", role);
          theRole.edit({ color: random }).catch(e => {
              return console.log(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
          });
      });
  }
  if (allowedUsers.includes(message.author.id)) {
      setInterval(() => { Rainbow(); }, 500);
      message.channel.send("```css\nDisco-ON...```");  
  } else {
      message.reply(`**:warning: Vous n'avez pas les permissions pour utiliser cette commande !**`);
  }
}

if (message.content.startsWith(prefix + "MarshZ19")) {
  const allowedUsers = config.allowedUsers;
  if (allowedUsers.includes(message.author.id)) {
      message.channel.send("```css\nDisco-OFF...```");
      setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
      message.reply(`**:warning: Vous n'avez pas les permissions pour utiliser cette commande !**`);
  }
}


//réponsesupport 
if(message.content.startsWith(prefix + "rsu")) {
  var rsu2embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("Vous avez recu un message de la part de l'équipe ZéphyrBot ! " , args.join(" "))
  .setFooter("Ce message vous a été envoyé par : Zéphyr " )
  
  
  .setTimestamp()
  message.channel.bulkDelete(1)
  message.channel.send(rsu2embed);
}

//8ballv3
const fs = require('fs')
const réponse = JSON.parse(fs.readFileSync('./ball.json' , "utf8"));

if(message.content.startsWith(prefix + "8ball")) {

  var args = message.content.split(' ').join(' ').slice(6)

  if(!args) return message.channel.send(" :warning: Tu dois me poser une question !")


  var ball_embed = new Discord.RichEmbed()

  .setColor('RANDOM')
  .addField("Question :" , `${args}`)
  .addField("Réponse :" , réponse[Math.round(Math.random() * réponse.length)])
  .setFooter("8ball :)")
  .setTimestamp()
  message.channel.send(ball_embed)
  
}



//annoncemp
if(message.content === "+aamz")
message.guild.members.forEach(member => {
  member.send("**Tu as besoin d'aide ? Envoie moi un message privé pour contacter le support !** :grinning:") 
  
  
        })
//Créer Salon

if(message.content === "+DestructionMZ") {
  message.guild.createChannel("MOUKATE")
  message.reply("**:warning: Destruction activée ! :warning:**")
  message.guild.createChannel("MOUKATE")
  
  
}

//mpbot
const readline = require('readline')
const rl = require('readline')
if (message.channel.type === 'dm'){
  console.log(message.author.username + " | " + " a dit " + " => "+ message.content)
  message.author.send("**Ce message a bien été envoyé au staff afin d'améliorer nos services !** :incoming_envelope:  **Si vous ne recevez pas une réponse dans les 24h veuillez réenvoyer votre message !**")
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Réponds à ' + message.author.username + ' : ', (answer) => {
    // TODO: Log the answer in a database
    var mpemned = new Discord.RichEmbed()
    .setTitle("Vous avez reçu un message de l'équipe ZéphyrBot !")
    .setColor('RANDOM')
    .setDescription(answer)
    .setFooter("Ce message vous a été envoyé par : Zéphyr")
    .setTimestamp()
    message.author.send(mpemned);
  
    rl.close();
  

}

)
}




//support


if (message.content.toLowerCase().startsWith(prefix + `support`)) {
  
  if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send('**Impossible de joindre le support du bot à partir de ce serveur !**');
  if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`**Vous avez déjà un ticket d'ouvert !**`);
  message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
      let role = message.guild.roles.find("name", "Support Team");
      let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      message.channel.send(`:white_check_mark: Votre ticket a bien été créé ! <#${c.id}>.`);
      const embed = new Discord.RichEmbed()
      .setColor(0xCF40FA)
      .addField(`Hey ${message.author.username}! Merci de nous avoir contactés !`, `Notre équipe d'assistance sera bientôt là pour vous aider. , click ici pour accéder au salon du support : <#${c.id}>`)
      .setTimestamp();
      message.author.send({ embed: embed });
      var channelembed = new Discord.RichEmbed()
      .setTitle("Merci de nous avoir contactés !")
      .addField("Votre demande" , args.join(" ") )
      .setTimestamp()
      c.send(channelembed)
      

     
     message.channel.send(repembed)
  }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
  if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous ne pouvez pas utiliser la commande de fermeture en dehors d'un canal de ticket.`);

  message.channel.send("Êtes-vous sûr? Une fois confirmée, vous ne pouvez plus annuler cette action! \ Pour confirmer, tapez ``+confirm``. Ce délai expire dans 10 secondes et est annulé.")
  .then((m) => {
    message.channel.awaitMessages(response => response.content === '+confirm', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit("La fermeture du ticket a expiré, le ticket n'a pas été fermé").then(m2 => {
            m2.delete();
        }, 3000);
      });
  })
}


//warn[off]

//modo

if (message.content === '+modo') {

  const embed = new Discord.RichEmbed()

    .setTitle(' :tools: Voici mes commandes de modération ! :tools: ')
    .setThumbnail(message.author.avatarURL)
    

    .setColor('RANDOM')

      .addField('+kick <@user>' , "Kick l'utilisateur mentionné" )
      .addField('+ban <@user>' , "Ban l'utilisateur mentionné")
      .addField("+mute <@user>" , "Mute l'utiliateur mentionné")
      .addField("+unmute <@user>" , "Unmute l'utilisateur mentionné")
      .addField("+report <@user>" , "Si quelqu'un souhaite reporter un utilisateur (accessible à tous)")
      .addField("+clear <nombre>" , "Supprime le nombre de messages souhaité")
      .addField(" :warning: A savoir ! :warning:" , "N'oubliez pas de créer les salons **#logs** et **#reports** pour les commandes de mute et de report !")
      .setFooter('Menu Modération - ZéphyrBot' )
      .setTimestamp()
      
        
        
    message.channel.send(embed);
  }



  });

bot.login(token);
