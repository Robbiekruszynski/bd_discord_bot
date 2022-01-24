module.exports = {
    name: 'ethereum',
    description: "this is a command to link to ethereum docs page",
    execute(message, args){
        if(message.member.roles.cache.has('928637733189091378')){
            message.channel.send('https://blockdaemon.com/about/')

        } else {
            message.channel.send('This command only works for those that have the BDU Member role.');
        }

    }

} 