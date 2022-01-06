module.exports = {
    name: 'bddocs',
    description: "this is a command to link to the Blockdaemon docs page",
    execute(message, args){
        message.channel.send('https://blockdaemon.com/docs/welcome/what-is-blockdaemon/');

    }
}