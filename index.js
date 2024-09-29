const axios = require('axios');

class LoveStatus {
    /**
     * @param {Client} botClient 
     */
    constructor(botClient) {
        this.botClient = botClient;
    }

    /**
     * @param {String} channelId 
     * @param {String} status 
     * @returns {Promise<void>} 
     */
    async setVoiceStatus(channelId, status) {
        try {
            const response = await axios.put(
                `https://discord.com/api/v10/channels/${channelId}/voice-status`,
                { status: status.length > 0 ? status : 'In Love Status' },
                { headers: { Authorization: `Bot ${this.botClient.token}` } }
            );

           
        } catch (error) {
            if (error.response) {
                console.error(`API Error (${error.response.status}): ${error.response.data.message}`);
            } else if (error.request) {
                console.error('No response received from API');
            } else {
                console.error(`Request Setup Error: ${error.message}`);
            }
            throw new Error(`An error occurred: ${error.message}`);
        }
    }
}

module.exports = { LoveStatus };