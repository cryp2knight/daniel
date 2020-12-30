export default {
    async discordify({ commit }: any, msg: string) {
        console.log(process.env.ENV)
        if (process.env.ENV !== 'prod')
            return;
        // haha this could still be seen from the XHR but yeah 
        // @ts-ignore
        await this.$axios.post(process.env.DISCORD_HOOK, { content: msg + window.location.href })
    }
}