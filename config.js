const config = {
    TOKEN: "xoxc-5940966605172-5951155469073-5931874443766-43a857739c88a221080c46fb47505e72e305c2dcf786650078192cafc3552bf2",
    COOKIE: "xoxd-KL68q4dcM%2F6w%2FJuuuo%2FaDhjmxfHgs6edWQNqcvoPFDzp5t44K4lw7ekYSfPscBY4N6u%2FyRQtPua%2FPp%2B9kwlOGN%2FggedY%2FIQjBT4XPC5h3cOxyv%2BOTwMkjiMmR69dOL7IiEFSqSMwSAff4U5%2BBnaU0wI6OozkAyrpTT5H2HUIqUWeJ6FZrxweB1rB00DIpHsd2eLeE42SUHU%3D",
    TEAM_ID: "w1695415296-bgp137044",
    CHANNEL: "C05SU10K15K",
    CLAUDE_USER: "U05F0G8UVEJ",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;
