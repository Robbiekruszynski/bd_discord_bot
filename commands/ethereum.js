module.exports = {
    name: 'ethereum',
    description: "this is a command to link to ethereum docs page",
    execute(message, args){
        if(message.member.roles.cache.has('933034336243024002')){
            message.channel.send('https://blockdaemon.com/marketplace/ethereum/, https://ethereum.org/en/developers/docs/')

        } else {
            message.channel.send('This command only works for those that have the Ethereum role.');
        }

    }

} 