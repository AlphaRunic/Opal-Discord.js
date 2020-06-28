module.exports = {
  name: 'version',
  category: 'Info',
  desc: 'Returns the version of Opal.',
  run: async (client,msg,args,opal) => {
    msg.channel.send(opal.version);
  }
}