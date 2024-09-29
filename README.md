
# LoveStatus

LoveStatus is a simple and easy-to-use package that allows you to manage custom statuses for Discord Voice Channels. With this library, you can quickly update the status of any voice channel in your Discord server, creating unique vibes and making your server stand out!

### Features

- Easily set and update custom statuses for voice channels.

- Seamless integration with Discord bots using discord.js.

- Lightweight and easy to configure.


### Installation

You can install LoveStatus via npm:
```
npm install lovestatus
```
### Usage

- Here’s a step-by-step guide on how to use LoveStatus in your Discord bot:

## 1. Import and Initialize the Package

- First, require the LoveStatus package and pass in your bot's client to initialize it.
```javascript
const { Client, GatewayIntentBits } = require('discord.js');
const { LoveStatus } = require('lovestatus');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

// Initialize LoveStatus with the bot client
const loveStatus = new LoveStatus(client);
```
## 2. Setting the Voice Channel Status

- Once you've initialized the package, you can set the status of any voice channel by providing the channel ID and the desired status message.
```javascript
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Example: Set a custom status for a specific voice channel
    const channelId = 'YOUR_VOICE_CHANNEL_ID';
    const statusMessage = 'Feeling the love in here!';

    loveStatus.setVoiceStatus(channelId, statusMessage)
        .then(() => console.log('Voice status set successfully!'));
        .catch((error) => console.error(`Error setting status: ${error.message}`));
});

client.login('YOUR_DISCORD_BOT_TOKEN');
```
## 3. Handling Errors

- If there’s an issue updating the voice channel status, the package will throw an error that can be caught in a catch block.

```javascript
loveStatus.setVoiceStatus(channelId, statusMessage)
    .then(() => console.log('Voice status updated!'))
    .catch((error) => {
        console.error(`Failed to update voice status: ${error.message}`);
        // Add any additional error handling if needed
    });
```
## 4. Fallback Status

- If no status message is provided, the package will use a default status ("In Love").
```javascript
loveStatus.setVoiceStatus(channelId)
    .then(() => console.log('Default status applied'))
    .catch((error) => console.error(error));
```
## 5. Full Example

- Here’s a complete example of how to integrate LoveStatus into your Discord bot:

```javascript 
const { Client, GatewayIntentBits } = require('discord.js');
const { LoveStatus } = require('lovestatus');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
const loveStatus = new LoveStatus(client);

client.once('ready', async () => {
    console.log(`${client.user.tag} is online and ready to spread the love!`);

    // Set the status for a voice channel
    const channelId = 'YOUR_VOICE_CHANNEL_ID';
    try {
        await loveStatus.setVoiceStatus(channelId, 'We are all in love!');
        console.log('Voice status updated successfully!');
    } catch (error) {
        console.error(`Error updating voice status: ${error.message}`);
    }
});

client.login('YOUR_DISCORD_BOT_TOKEN');
```

## API Reference

- setVoiceStatus(channelId, status)

- channelId: The ID of the voice channel whose status you want to change.

- status (optional): The custom status message you want to set for the voice channel. If not provided, the default status ("In Love") will be used.


- Returns a promise that resolves when the status is successfully updated, or throws an error if something goes wrong.

## License

- This package is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

- Feel free to contribute to the development of lovestatus. Fork the repository, create a new branch, and submit a pull request with your improvements.

## Issues

- If you encounter any issues or bugs, please open a new issue on the GitHub repository.