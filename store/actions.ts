const webHook = 'https://discordapp.com/api/webhooks/767304662583476244/84V4ZxBQUluzzAOMOZVHbVTaKobw4OcQM37VYunBqbb-_Ez8rB3sBNcMeBz-5Vw0I9ed';

export default {
    async discordify({ commit }: any, msg: string) {
        // @ts-ignore
        await this.$axios.post(webHook, { content: msg + window.location.href })
    }
}