export default {
    async discordify({ commit }: any, msg: string) {
        if (process.env.isDev) {
            return;
        }
        try {
            // @ts-ignore
            await this.$axios.post(process.env.discordHook, { content: msg + window.location.href })
        } catch (error) {
            console.warn(error)
        }
    }
}