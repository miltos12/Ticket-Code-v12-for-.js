miltos.on('message', async message => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command == "ticket-setup") {

      let channel = message.mentions.channels.first();
      if(!channel) return;

      let sent = await channel.send(new Discord.MessageEmbed()
          .setColor('BLACK')
          .setThumbnail('')
.setDescription("**Για την άμεση εξυπηρέτησή σας μπορείτε να ανοίξετε ένα ticket** \n  📞Support \n 💸Donate \n ⛔Ban Appeal\n ❓Other ")
          .setFooter("Κάνε reaction σε ένα από τα παρακάτω emojis το οποίο παρουσιάζει το θέμα του ticket.")
      )
      sent.react('📞');
      sent.react('💸');
      sent.react('⛔');
      sent.react('❓');
  }
  
  function _0x5822(){const _0x59c3dd=['Διάλεξε\x20το\x20θέμα\x20του\x20ticket','channels','setLabel','259496NEbJNI','donate','setDescription','setValue','mentions','setEmoji','Support','setup','setColor','addOption','60820CkyUHN','Bug','1029864bBQuPk','send','Ban\x20Appeal','first','MessageEmbed','47652QLmAKI','705033dUpofG','support','67131rwtjZX','**\x0a📞\x20Support\x0a🚫\x20Ban\x20Appeal\x0a💵\x20Donate\x0a🐛\x20Bug\x0a🔍Staff\x20Report\x20**','32xbYhyk','110OFHpHd','channel','78laFZNx','setPlaceholder','Staff\x20Report','Επέλεξε\x20μία\x20από\x20τις\x20παρακάτω\x20επιλογές\x20το\x20οποίο\x20παρουσιάζει\x20το\x20θέμα\x20του\x20ticket.','Βάλε\x20ενα\x20κανάλι','9jTGMQS','828090IKsjra','setID','bug'];_0x5822=function(){return _0x59c3dd;};return _0x5822();}const _0x14f254=_0x4221;function _0x4221(_0xf8ed34,_0xbd2605){const _0x582247=_0x5822();return _0x4221=function(_0x4221c6,_0x57ad78){_0x4221c6=_0x4221c6-0xcc;let _0x51cb4d=_0x582247[_0x4221c6];return _0x51cb4d;},_0x4221(_0xf8ed34,_0xbd2605);}(function(_0x4cb96c,_0x41b986){const _0x397bee=_0x4221,_0x2d001f=_0x4cb96c();while(!![]){try{const _0x3127f5=parseInt(_0x397bee(0xee))/0x1+parseInt(_0x397bee(0xda))/0x2+-parseInt(_0x397bee(0xce))/0x3*(parseInt(_0x397bee(0xe4))/0x4)+parseInt(_0x397bee(0xcc))/0x5*(parseInt(_0x397bee(0xeb))/0x6)+parseInt(_0x397bee(0xec))/0x7*(parseInt(_0x397bee(0xf0))/0x8)+-parseInt(_0x397bee(0xd3))/0x9*(-parseInt(_0x397bee(0xd4))/0xa)+parseInt(_0x397bee(0xe6))/0xb;if(_0x3127f5===_0x41b986)break;else _0x2d001f['push'](_0x2d001f['shift']());}catch(_0xc7d192){_0x2d001f['push'](_0x2d001f['shift']());}}}(_0x5822,0x87a3e));if(command===_0x14f254(0xe1)){let channel=message[_0x14f254(0xde)][_0x14f254(0xd8)][_0x14f254(0xe9)]();if(!channel)return message[_0x14f254(0xcd)]['send'](_0x14f254(0xd2));const embed=new Discord[(_0x14f254(0xea))]()[_0x14f254(0xdc)](_0x14f254(0xef))['setFooter'](_0x14f254(0xd1))[_0x14f254(0xe2)]('BLACK');let option1=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe0))[_0x14f254(0xdf)]('📞')[_0x14f254(0xdd)](_0x14f254(0xed)),option2=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe8))[_0x14f254(0xdf)]('🚫')[_0x14f254(0xdd)]('ban'),option3=new MessageMenuOption()[_0x14f254(0xd9)]('Donate')[_0x14f254(0xdf)]('💵')[_0x14f254(0xdd)](_0x14f254(0xdb)),option4=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe5))['setEmoji']('🐛')[_0x14f254(0xdd)](_0x14f254(0xd6)),option5=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xd0))[_0x14f254(0xdf)]('🔍')[_0x14f254(0xdd)]('report'),test=new MessageMenu()[_0x14f254(0xd5)]('ez')[_0x14f254(0xcf)](_0x14f254(0xd7))[_0x14f254(0xe3)](option1)['addOption'](option2)[_0x14f254(0xe3)](option3)[_0x14f254(0xe3)](option4)[_0x14f254(0xe3)](option5);const ez=new MessageActionRow()['addComponents'](test);channel[_0x14f254(0xe7)](embed,ez);}
  //!setup + to kanali 
  const _0xb98d13=_0x5c0a;function _0xf9b9(){const _0x4e3e9f=['channel','MessageEmbed','28762677jXIGjz','setID','6924208ZnZqOe','**Πατόντας\x20στο\x20menu\x20γινεστε\x20verify**','3909534gjcwRr','setDescription','setColor','first','168PNUEEl','addOption','Visitor','Γίνε\x20Verify','setValue','42xFNNft','visit','setEmoji','channels','6625004DXlKqp','1954ZEekKm','1567392aPRZAU','vsetup','addComponents','7389430QNekWl','mentions'];_0xf9b9=function(){return _0x4e3e9f;};return _0xf9b9();}(function(_0x5796e9,_0x595251){const _0x50ba62=_0x5c0a,_0x3649dd=_0x5796e9();while(!![]){try{const _0x4e766f=parseInt(_0x50ba62(0x1ee))/0x1*(parseInt(_0x50ba62(0x1f8))/0x2)+parseInt(_0x50ba62(0x1ea))/0x3+parseInt(_0x50ba62(0x1f7))/0x4+-parseInt(_0x50ba62(0x1fc))/0x5+-parseInt(_0x50ba62(0x1f9))/0x6*(-parseInt(_0x50ba62(0x1f3))/0x7)+parseInt(_0x50ba62(0x1e8))/0x8+-parseInt(_0x50ba62(0x1e6))/0x9;if(_0x4e766f===_0x595251)break;else _0x3649dd['push'](_0x3649dd['shift']());}catch(_0x27c5b2){_0x3649dd['push'](_0x3649dd['shift']());}}}(_0xf9b9,0xd7838));function _0x5c0a(_0x43e2ec,_0x3992c4){const _0xf9b973=_0xf9b9();return _0x5c0a=function(_0x5c0ad8,_0x2f372e){_0x5c0ad8=_0x5c0ad8-0x1e4;let _0x25104e=_0xf9b973[_0x5c0ad8];return _0x25104e;},_0x5c0a(_0x43e2ec,_0x3992c4);}if(command===_0xb98d13(0x1fa)){let channel=message[_0xb98d13(0x1fd)][_0xb98d13(0x1f6)][_0xb98d13(0x1ed)]();if(!channel)return message[_0xb98d13(0x1e4)]['send']('Βάλε\x20ενα\x20κανάλι');const embed=new Discord[(_0xb98d13(0x1e5))]()[_0xb98d13(0x1eb)](_0xb98d13(0x1e9))[_0xb98d13(0x1ec)]('BLACK');let option1=new MessageMenuOption()['setLabel'](_0xb98d13(0x1f0))[_0xb98d13(0x1f5)]('🧍')[_0xb98d13(0x1f2)](_0xb98d13(0x1f4)),test=new MessageMenu()[_0xb98d13(0x1e7)]('ez')['setPlaceholder'](_0xb98d13(0x1f1))[_0xb98d13(0x1ef)](option1);const ez=new MessageActionRow()[_0xb98d13(0x1fb)](test);channel['send'](embed,ez);}
const _0x1173e0=_0x2bdb;function _0x2bdb(_0x476def,_0x5745a9){const _0x40e448=_0x40e4();return _0x2bdb=function(_0x2bdbef,_0x2854b5){_0x2bdbef=_0x2bdbef-0x135;let _0x3df64a=_0x40e448[_0x2bdbef];return _0x3df64a;},_0x2bdb(_0x476def,_0x5745a9);}(function(_0x189689,_0x2ff102){const _0x5c1969=_0x2bdb,_0x40d4a5=_0x189689();while(!![]){try{const _0x2d0b3c=-parseInt(_0x5c1969(0x147))/0x1+-parseInt(_0x5c1969(0x153))/0x2+-parseInt(_0x5c1969(0x135))/0x3*(parseInt(_0x5c1969(0x154))/0x4)+parseInt(_0x5c1969(0x150))/0x5*(parseInt(_0x5c1969(0x141))/0x6)+parseInt(_0x5c1969(0x144))/0x7+parseInt(_0x5c1969(0x14a))/0x8*(parseInt(_0x5c1969(0x14f))/0x9)+-parseInt(_0x5c1969(0x143))/0xa;if(_0x2d0b3c===_0x2ff102)break;else _0x40d4a5['push'](_0x40d4a5['shift']());}catch(_0x4f00db){_0x40d4a5['push'](_0x40d4a5['shift']());}}}(_0x40e4,0x59bed));function _0x40e4(){const _0x154da6=['setPlaceholder','198wJgrSx','305IRETwt','Επέλεξε\x20μία\x20από\x20τις\x20παρακάτω\x20επιλογές\x20το\x20οποίο\x20παρουσιάζει\x20το\x20θέμα\x20του\x20application','setValue','277514AWQdoB','15676uGsZIi','**\x0a💼\x20Staff\x0a🚓\x20Police\x0a🚑\x20Ambulance**','165CttjRL','first','Police','send','Βάλε\x20ενα\x20κανάλι','setLabel','channels','Διάλεξε\x20το\x20θέμα\x20του\x20ticket','addOption','police','Staff','setDescription','71382VCdhJx','mentions','3385790qCbHpt','1024030TiULpt','setEmoji','ambulance','205527wkfpsB','setFooter','MessageEmbed','143272EhNNQx','setID','staff','channel'];_0x40e4=function(){return _0x154da6;};return _0x40e4();}if(command==='apsetup'){let channel=message[_0x1173e0(0x142)][_0x1173e0(0x13b)][_0x1173e0(0x136)]();if(!channel)return message[_0x1173e0(0x14d)][_0x1173e0(0x138)](_0x1173e0(0x139));const embed=new Discord[(_0x1173e0(0x149))]()[_0x1173e0(0x140)](_0x1173e0(0x155))[_0x1173e0(0x148)](_0x1173e0(0x151))['setColor']('BLACK');let option1=new MessageMenuOption()[_0x1173e0(0x13a)](_0x1173e0(0x13f))[_0x1173e0(0x145)]('💼')[_0x1173e0(0x152)](_0x1173e0(0x14c)),option2=new MessageMenuOption()['setLabel'](_0x1173e0(0x137))[_0x1173e0(0x145)]('🚓')[_0x1173e0(0x152)](_0x1173e0(0x13e)),option3=new MessageMenuOption()[_0x1173e0(0x13a)]('Ambulance')[_0x1173e0(0x145)]('🚑')[_0x1173e0(0x152)](_0x1173e0(0x146)),test=new MessageMenu()[_0x1173e0(0x14b)]('ez')[_0x1173e0(0x14e)](_0x1173e0(0x13c))[_0x1173e0(0x13d)](option1)['addOption'](option2)[_0x1173e0(0x13d)](option3);const ez=new MessageActionRow()['addComponents'](test);channel['send'](embed,ez);}
});  
miltos.on('messageReactionAdd', async (reaction, user)=> {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
  if(user.bot) return;
  if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "CHANNEL ID") { //to id pp einai to embed
    const staffid= reaction.message.guild.roles.cache.get("Role ID") // to id tou staff team
  if(reaction.emoji.name === "📞") {
          reaction.users.remove(user);
        

          reaction.message.guild.channels.create(`📞ticket-support-${user.username}`, {
              type: "text",
              topic: " ",
               permissionOverwrites: [
              {
                  id: user.id,
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
              },
              {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
              },
              {  
                id: staffid,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              }
    ],
    })
    .then(ch => {
    ch.send(`<@${user.id}> `,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
    })
  }
  if(reaction.emoji.name === "💸") {
  reaction.users.remove(user);
  
  
  reaction.message.guild.channels.create(`💸ticket-donate- ${user.username}`, {
    type: "text",
    topic: "",
     permissionOverwrites: [
    {
        id: user.id,
        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
    },
    {
        id: reaction.message.guild.roles.everyone,
        deny: ["VIEW_CHANNEL"]
    },
    {  
      id:  staffid,
    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
    }
  ],
  })
  .then(ch => {
    ch.send(`<@${user.id}> ` ,new Discord.MessageEmbed().setDescription ('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
  })
  }
  if(reaction.emoji.name === "⛔") {
    reaction.users.remove(user);
    
    
    reaction.message.guild.channels.create(`⛔ticket-ban-appeal-${user.username}`, {
      type: "text",
      topic: " ",
       permissionOverwrites: [
      {
          id: user.id,
          allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },
      {
          id: reaction.message.guild.roles.everyone,
          deny: ["VIEW_CHANNEL"]
      },
      {  
        id:  staffid,
      allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      }
    ],
    })
    .then(ch => {
      ch.send(`<@${user.id}>`,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
    })
  }
  if(reaction.emoji.name === "❓") {
      reaction.users.remove(user);
      
      
      reaction.message.guild.channels.create(`❓ticket-other-${user.username}`, {
        type: "text",
        topic: " ",
         permissionOverwrites: [
        {
            id: user.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        },
        {
            id: reaction.message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        },
        {  
          id:  staffid,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }
      ],
      })
      .then(ch => {
        ch.send(`<@${user.id}> `,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
      })
  }
}
if(reaction.emoji.name === '🔒') {
  if(!reaction.message.channel.name.includes('ticket-')) return;
  
  reaction.message.channel.delete()
  }
})
const _0x428b0a=_0x2f5e;function _0x2f5e(_0x13574c,_0x252261){const _0x5659c7=_0x5659();return _0x2f5e=function(_0x2f5ee7,_0x5c7c4f){_0x2f5ee7=_0x2f5ee7-0xb5;let _0x309868=_0x5659c7[_0x2f5ee7];return _0x309868;},_0x2f5e(_0x13574c,_0x252261);}(function(_0x37eead,_0x1769f6){const _0x3b802a=_0x2f5e,_0x2da1c8=_0x37eead();while(!![]){try{const _0x1dd54a=-parseInt(_0x3b802a(0xd5))/0x1+-parseInt(_0x3b802a(0xfa))/0x2+-parseInt(_0x3b802a(0xca))/0x3+-parseInt(_0x3b802a(0xd4))/0x4+parseInt(_0x3b802a(0xc2))/0x5*(parseInt(_0x3b802a(0xb6))/0x6)+parseInt(_0x3b802a(0xcd))/0x7*(-parseInt(_0x3b802a(0xf4))/0x8)+-parseInt(_0x3b802a(0xf5))/0x9*(-parseInt(_0x3b802a(0xec))/0xa);if(_0x1dd54a===_0x1769f6)break;else _0x2da1c8['push'](_0x2da1c8['shift']());}catch(_0xa8c6b1){_0x2da1c8['push'](_0x2da1c8['shift']());}}}(_0x5659,0x510f7),miltos['on'](_0x428b0a(0xed),async _0x296083=>{const _0x269c17=_0x428b0a;if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xc7)){_0x296083[_0x269c17(0xdf)][_0x269c17(0xcb)](_0x269c17(0xf7),!![])[_0x269c17(0xeb)](_0x4e2288=>{});const _0x2a38db=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)]['channels'][_0x269c17(0xcc)][_0x269c17(0xf1)](_0xc528e4=>_0xc528e4[_0x269c17(0xc4)]===_0x269c17(0xc3)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)][_0x269c17(0xf0)]()['replace'](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x2a38db)return _0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xcb)]('Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20📞support\x20ticket\x20');_0x296083[_0x269c17(0xc5)]['channels'][_0x269c17(0xcc)][_0x269c17(0xc1)](config[_0x269c17(0xc6)])[_0x269c17(0xcb)](new MessageEmbed()['addField'](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')['addField'](_0x269c17(0xbc),'📞support')['setTitle'](_0x269c17(0xe0))[_0x269c17(0xe5)]('RANDOM')),await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)]['create']('📞support-'+_0x296083['clicker']['user']['username'],{'parent':_0x296083[_0x269c17(0xf8)]['channel'][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),'SEND_MESSAGES']},{'id':config['staff'],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083[_0x269c17(0xd7)]['id'],'allow':[_0x269c17(0xcf),'SEND_MESSAGES']}]})[_0x269c17(0xb7)](async _0x1f177f=>{const _0xef041b=_0x269c17,_0x4c80bd=new MessageEmbed()['setColor'](_0xef041b(0xbe))['setDescription'](_0xef041b(0xd1)),_0x4d4a77=new MessageButton()['setStyle']('blurple')['setLabel']('🔒')[_0xef041b(0xf9)]('close');await _0x1f177f[_0xef041b(0xcb)]('<@'+_0x296083['clicker'][_0xef041b(0xef)]['id']+'>',{'embed':_0x4c80bd,'component':new MessageActionRow()[_0xef041b(0xd0)](_0x4d4a77)});});}if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xee)){_0x296083[_0x269c17(0xdf)]['send']('Άνοιξες\x20ενα\x20🚫ban-appeal\x20ticket!',!![])[_0x269c17(0xeb)](_0x459e12=>{});const _0x58e0c0=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)]['channels']['cache']['find'](_0x144de2=>_0x144de2[_0x269c17(0xc4)]===_0x269c17(0xdd)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)][_0x269c17(0xf0)]()[_0x269c17(0xdb)](/ +/g,'-')['replace'](/!/g,''));if(_0x58e0c0)return _0x296083['clicker'][_0x269c17(0xef)][_0x269c17(0xcb)](_0x269c17(0xda));let _0x2713c5=_0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config[_0x269c17(0xc6)])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),'🚫ban-appeal')[_0x269c17(0xf2)]('Open\x20Ticket')[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x46ec8a=await _0x296083[_0x269c17(0xc5)]['channels'][_0x269c17(0xe7)](_0x269c17(0xdd)+_0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xb9)],{'parent':_0x296083['message'][_0x269c17(0xc9)]['parentID'],'permissionOverwrites':[{'id':_0x296083['guild']['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':config[_0x269c17(0xd6)],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083['clicker'][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x432c65=>{const _0x488956=_0x269c17,_0x51e731=new MessageEmbed()[_0x488956(0xe5)]('RANDOM')['setDescription']('**Παρακαλω\x20περιμενετε\x20το\x20staff\x20team\x20θα\x20σας\x20εξυπηρετησει\x20συντομα!!Αν\x20θελετε\x20να\x20κλεισετε\x20καντε\x20react\x20με\x20🔒**'),_0x373f36=new MessageButton()[_0x488956(0xce)](_0x488956(0xe6))[_0x488956(0xbd)]('🔒')[_0x488956(0xf9)](_0x488956(0xdc));await _0x432c65[_0x488956(0xcb)]('<@'+_0x296083[_0x488956(0xd7)][_0x488956(0xef)]['id']+'>',{'embed':_0x51e731,'component':new MessageActionRow()[_0x488956(0xd0)](_0x373f36)});});}if(_0x296083['values'][0x0]==='donate'){_0x296083[_0x269c17(0xdf)]['send'](_0x269c17(0xe1),!![])[_0x269c17(0xeb)](_0x4496a3=>{});const _0x5f40ad=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)]['find'](_0x4445d8=>_0x4445d8[_0x269c17(0xc4)]===_0x269c17(0xc8)+_0x296083['clicker']['user'][_0x269c17(0xb9)]['toLowerCase']()[_0x269c17(0xdb)](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x5f40ad)return _0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xcb)](_0x269c17(0xe8));let _0xb7e24a=_0x296083['guild'][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config['ticket'])['send'](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)]['user']['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),_0x269c17(0xc0))[_0x269c17(0xf2)]('Open\x20Ticket')[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x3469fd=await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xe7)](_0x269c17(0xc8)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)],{'parent':_0x296083[_0x269c17(0xf8)]['channel'][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),'SEND_MESSAGES']},{'id':config[_0x269c17(0xe2)],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0xfc91b4=>{const _0x15e47a=_0x269c17,_0x3ddf60=new MessageEmbed()[_0x15e47a(0xe5)]('RANDOM')['setDescription'](_0x15e47a(0xd1)),_0x2e6fa1=new MessageButton()[_0x15e47a(0xce)](_0x15e47a(0xe6))[_0x15e47a(0xbd)]('🔒')[_0x15e47a(0xf9)]('close2');await _0xfc91b4[_0x15e47a(0xcb)]('<@'+_0x296083[_0x15e47a(0xd7)][_0x15e47a(0xef)]['id']+'>',{'embed':_0x3ddf60,'component':new MessageActionRow()['addComponent'](_0x2e6fa1)});});}if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xea)){_0x296083['reply'][_0x269c17(0xcb)](_0x269c17(0xd3),!![])[_0x269c17(0xeb)](_0x33e3d6=>{});const _0x12a030=_0x296083[_0x269c17(0xf8)]['guild']['channels']['cache'][_0x269c17(0xf1)](_0x566672=>_0x566672[_0x269c17(0xc4)]===_0x269c17(0xb8)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['username'][_0x269c17(0xf0)]()['replace'](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x12a030)return _0x296083['clicker'][_0x269c17(0xef)]['send'](_0x269c17(0xe3));let _0x3aa52=_0x296083['guild']['channels']['cache'][_0x269c17(0xc1)](config['ticket'])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)]('Panel',_0x269c17(0xde))[_0x269c17(0xf2)](_0x269c17(0xe0))[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x1a9789=await _0x296083['guild'][_0x269c17(0xbb)][_0x269c17(0xe7)]('🐛bug-'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)],{'parent':_0x296083[_0x269c17(0xf8)][_0x269c17(0xc9)][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':config[_0x269c17(0xd6)],'allow':['SEND_MESSAGES',_0x269c17(0xcf)]},{'id':_0x296083['clicker'][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x32e9c9=>{const _0x52ab4a=_0x269c17,_0x203abb=new MessageEmbed()['setColor']('RANDOM')['setDescription'](_0x52ab4a(0xd1)),_0xd90e34=new MessageButton()[_0x52ab4a(0xce)](_0x52ab4a(0xe6))[_0x52ab4a(0xbd)]('🔒')['setID'](_0x52ab4a(0xb5));await _0x32e9c9[_0x52ab4a(0xcb)]('<@'+_0x296083['clicker'][_0x52ab4a(0xef)]['id']+'>',{'embed':_0x203abb,'component':new MessageActionRow()[_0x52ab4a(0xd0)](_0xd90e34)});});}if(_0x296083[_0x269c17(0xf6)][0x0]==='report'){_0x296083[_0x269c17(0xdf)][_0x269c17(0xcb)](_0x269c17(0xd9),!![])[_0x269c17(0xeb)](_0x3d1717=>{});const _0x51fab0=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xf1)](_0x3de89b=>_0x3de89b[_0x269c17(0xc4)]===_0x269c17(0xf3)+_0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xb9)][_0x269c17(0xf0)]()[_0x269c17(0xdb)](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x51fab0)return _0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['send']('Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🔍staff-report\x20');let _0x4eff2d=_0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config['ticket'])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),'🔍staff-report')[_0x269c17(0xf2)]('Open\x20Ticket')['setColor'](_0x269c17(0xbe)));const _0x452597=await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)]['create'](_0x269c17(0xf3)+_0x296083[_0x269c17(0xd7)]['user']['username'],{'parent':_0x296083[_0x269c17(0xf8)][_0x269c17(0xc9)]['parentID'],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':_0x296083['clicker']['user']['id'],'allow':['VIEW_CHANNEL',_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x36da47=>{const _0x43b76a=_0x269c17,_0x23fbff=new MessageEmbed()[_0x43b76a(0xe5)]('RANDOM')[_0x43b76a(0xd2)](_0x43b76a(0xd1)),_0x5e332c=new MessageButton()[_0x43b76a(0xce)](_0x43b76a(0xe6))[_0x43b76a(0xbd)]('🔒')['setID'](_0x43b76a(0xbf));await _0x36da47[_0x43b76a(0xcb)]('<@'+_0x296083[_0x43b76a(0xd7)]['user']['id']+'>',{'embed':_0x23fbff,'component':new MessageActionRow()[_0x43b76a(0xd0)](_0x5e332c)});});}}));function _0x5659(){const _0x3e1bc7=['guild','ticket','support','💵donate-','channel','568761MaiAnv','send','cache','49ojBdQu','setStyle','VIEW_CHANNEL','addComponent','**Παρακαλω\x20περιμενετε\x20το\x20staff\x20team\x20θα\x20σας\x20εξυπηρετησει\x20συντομα!!Αν\x20θελετε\x20να\x20κλεισετε\x20καντε\x20react\x20με\x20🔒**','setDescription','Άνοιξες\x20ενα\x20🐛bug\x20ticket!','1601912GnresR','583491YfcGdN','staff','clicker','parentID','Άνοιξες\x20ενα\x20🔍staff\x20report\x20ticket!','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🚫ban-appeal\x20ticket\x20','replace','close1','🚫ban-appeal-','🐛bug','reply','Open\x20Ticket','Άνοιξες\x20ενα\x20💵donate\x20ticket!','manager','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🐛bug\x20ticket\x20','Ticket\x20By','setColor','blurple','create','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20💵donate\x20ticket\x20','SEND_MESSAGES','bug','catch','10OSbkIA','clickMenu','ban','user','toLowerCase','find','setTitle','🔍staff-report-','232256UefWUm','12348909WnTHal','values','Άνοιξες\x20ενα\x20⚡support\x20ticket!','message','setID','264462QbqGew','close3','6bYVaTg','then','🐛bug-','username','addField','channels','Panel','setLabel','RANDOM','close4','💵donate','get','2344665gBFHCi','📞support-','name'];_0x5659=function(){return _0x3e1bc7;};return _0x5659();}

const _0x2f73cb=_0x542b;function _0x2c3b(){const _0x5cb266=['⚡support','setTitle','delete','channel','RED','Closed\x20By','🔍staff-report','clicker','15402907JwbsdW','35gkmfdb','10jCYGYP','657fvbatl','close2','Panel','2413609pargyU','close4','🚫ban\x20appeal','2858WQJEvw','setColor','68000QfFAyU','get','116CzlSDU','close3','message','💵donate','314382lDfguJ','clickButton','ticket','cache','12AhPiLf','🐛bug','user','Close\x20Ticket','send','close1','addField','channels','catch','guild','199nfJKik','32360DoBDrB','56331bxlDpL'];_0x2c3b=function(){return _0x5cb266;};return _0x2c3b();}function _0x542b(_0x5889e0,_0xfdd51a){const _0x2c3b89=_0x2c3b();return _0x542b=function(_0x542bc0,_0x5893ce){_0x542bc0=_0x542bc0-0xb2;let _0x1d782a=_0x2c3b89[_0x542bc0];return _0x1d782a;},_0x542b(_0x5889e0,_0xfdd51a);}(function(_0x1328e5,_0x457270){const _0x38d052=_0x542b,_0x589197=_0x1328e5();while(!![]){try{const _0x632ba0=-parseInt(_0x38d052(0xc3))/0x1*(parseInt(_0x38d052(0xd7))/0x2)+-parseInt(_0x38d052(0xc5))/0x3*(parseInt(_0x38d052(0xdb))/0x4)+-parseInt(_0x38d052(0xd9))/0x5+parseInt(_0x38d052(0xb5))/0x6*(-parseInt(_0x38d052(0xcf))/0x7)+parseInt(_0x38d052(0xc4))/0x8*(parseInt(_0x38d052(0xd1))/0x9)+-parseInt(_0x38d052(0xd0))/0xa*(-parseInt(_0x38d052(0xd4))/0xb)+-parseInt(_0x38d052(0xb9))/0xc*(-parseInt(_0x38d052(0xce))/0xd);if(_0x632ba0===_0x457270)break;else _0x589197['push'](_0x589197['shift']());}catch(_0x7c2c99){_0x589197['push'](_0x589197['shift']());}}}(_0x2c3b,0x9146e),miltos['on'](_0x2f73cb(0xb6),async _0xa75043=>{const _0x2c4837=_0x2f73cb;if(_0xa75043['id']==='close'){let _0x1fdf7d=_0xa75043[_0x2c4837(0xc2)][_0x2c4837(0xc0)][_0x2c4837(0xb8)][_0x2c4837(0xda)](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)]('Close\x20Ticket')[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)][_0x2c4837(0xbb)]['id']+'>')['addField']('Panel',_0x2c4837(0xc6))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}if(_0xa75043['id']===_0x2c4837(0xbe)){let _0x3eebe8=_0xa75043['guild']['channels'][_0x2c4837(0xb8)]['get'](config['ticket'])[_0x2c4837(0xbd)](new MessageEmbed()['setTitle'](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)][_0x2c4837(0xbb)]['id']+'>')['addField'](_0x2c4837(0xd3),_0x2c4837(0xd6))[_0x2c4837(0xd8)](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}if(_0xa75043['id']===_0x2c4837(0xd2)){let _0x4fd327=_0xa75043[_0x2c4837(0xc2)]['channels'][_0x2c4837(0xb8)][_0x2c4837(0xda)](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)]['user']['id']+'>')[_0x2c4837(0xbf)]('Panel',_0x2c4837(0xb4))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})['catch'](()=>{});}if(_0xa75043['id']===_0x2c4837(0xb2)){let _0x281aa3=_0xa75043['guild'][_0x2c4837(0xc0)][_0x2c4837(0xb8)]['get'](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)](_0x2c4837(0xbc))[_0x2c4837(0xbf)]('Closed\x20By','<@'+_0xa75043['clicker'][_0x2c4837(0xbb)]['id']+'>')['addField'](_0x2c4837(0xd3),_0x2c4837(0xba))['setColor'](_0x2c4837(0xca)));_0xa75043['message'][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})['catch'](()=>{});}if(_0xa75043['id']===_0x2c4837(0xd5)){let _0x59c16d=_0xa75043[_0x2c4837(0xc2)][_0x2c4837(0xc0)]['cache']['get'](config['ticket'])['send'](new MessageEmbed()['setTitle'](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)]['user']['id']+'>')[_0x2c4837(0xbf)](_0x2c4837(0xd3),_0x2c4837(0xcc))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}}));

function _0x3d66(_0x7c7d3c,_0x30a171){var _0x8fc66c=_0x8fc6();return _0x3d66=function(_0x3d66fb,_0x3f8cd5){_0x3d66fb=_0x3d66fb-0x115;var _0x2fd071=_0x8fc66c[_0x3d66fb];return _0x2fd071;},_0x3d66(_0x7c7d3c,_0x30a171);}var _0x8fe275=_0x3d66;(function(_0x39ad85,_0x27453b){var _0x50d3af=_0x3d66,_0x49ad68=_0x39ad85();while(!![]){try{var _0xb4a851=-parseInt(_0x50d3af(0x127))/0x1+-parseInt(_0x50d3af(0x11c))/0x2+parseInt(_0x50d3af(0x126))/0x3*(parseInt(_0x50d3af(0x117))/0x4)+-parseInt(_0x50d3af(0x120))/0x5+-parseInt(_0x50d3af(0x11d))/0x6*(-parseInt(_0x50d3af(0x119))/0x7)+-parseInt(_0x50d3af(0x122))/0x8+parseInt(_0x50d3af(0x118))/0x9;if(_0xb4a851===_0x27453b)break;else _0x49ad68['push'](_0x49ad68['shift']());}catch(_0x53ea8b){_0x49ad68['push'](_0x49ad68['shift']());}}}(_0x8fc6,0x50031),miltos['on'](_0x8fe275(0x124),async _0x2f3f32=>{var _0xbd043b=_0x8fe275;_0x2f3f32['values'][0x0]==='visit'&&(_0x2f3f32['reply'][_0xbd043b(0x11e)](_0xbd043b(0x11b),!![])[_0xbd043b(0x123)](_0x4acbf8=>{}),await _0x2f3f32['message'][_0xbd043b(0x121)][_0xbd043b(0x11a)][_0xbd043b(0x115)][_0xbd043b(0x116)](_0x2f3f32['clicker']['user']['id'])['roles'][_0xbd043b(0x125)](config[_0xbd043b(0x11f)]));}));function _0x8fc6(){var _0xe5cee7=['send','welcome','1835585JmVKxP','guild','4990616OAtjVi','catch','clickMenu','add','30zaOEip','176795vYwsLH','cache','get','214532dWfyrr','4799448jOTyyy','35980TFlIvD','members','Ο\x20λογαριασμός\x20σου\x20έχει\x20επαληθευτεί','237948wHQLcB','636Jryhyn'];_0x8fc6=function(){return _0xe5cee7;};return _0x8fc6();}
