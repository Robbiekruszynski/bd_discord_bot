module.exports = {
    name: 'ethereumdocs',
    description: "this is a command to link to ethereum docs page",
    
    execute(message, args){
        if(message.member.roles.cache.has('933034336243024002')){
            message.channel.send('https://blockdaemon.com/docs/protocol-documentation/ethereum-2-0/ethereum-2-what-is-it/')

        } else {
            message.channel.send('This command only works for those that have the Ethereum role.');

        }

    }

} 
