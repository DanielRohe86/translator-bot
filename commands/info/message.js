module.exports = {
  name : 'message',
  run : async(client, message) => {
    message.channel.send('teste')
  }
}