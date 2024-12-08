// renderer.js

const userId = "1288119549551710289"; // Replace with your Discord User ID
const apiUrl = `https://discord.com/api/users/${userId}`;

async function fetchDiscordAvatar() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                // Optionally use a bot token if needed (not required for public profiles)
                // "Authorization": "Bot YOUR_BOT_TOKEN"
            }
        });

        if (!response.ok) {
            console.error("Failed to fetch Discord avatar:", response.statusText);
            return;
        }

        const data = await response.json();
        const avatarHash = data.avatar;

        // Determine the avatar URL
        const avatarUrl = avatarHash
            ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`
            : `https://cdn.discordapp.com/embed/avatars/${data.discriminator % 5}.png`; // Default avatar fallback

        // Set the image source dynamically
        const avatarElement = document.getElementById("discord-avatar");
        if (avatarElement) {
            avatarElement.src = avatarUrl;
        }
    } catch (error) {
        console.error("Error fetching Discord avatar:", error);
    }
}

// Call the function on page load
fetchDiscordAvatar();
