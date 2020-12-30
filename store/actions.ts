export default {
    async discordify({ commit }: any, msg: string) {
        if (process.env.ENV === 'dev')
            return;
        // haha this could still be seen from the XHR but yeah 
        // @ts-ignore
        await this.$axios.post(process.env.DISCORD_HOOK, { content: msg + window.location.href })
    }
}