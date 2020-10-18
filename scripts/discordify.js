webHook = 'https://discordapp.com/api/webhooks/767304662583476244/84V4ZxBQUluzzAOMOZVHbVTaKobw4OcQM37VYunBqbb-_Ez8rB3sBNcMeBz-5Vw0I9ed';

async function discordify(msg){
    return await fetch(webHook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            content: msg + window.location.href
        })
    })
}

discordify('Someone visited your website. ');

