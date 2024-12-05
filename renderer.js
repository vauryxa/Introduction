async function fetchDiscordStatus() {
    // Redirect to Discord login
    const loginUrl = `https://discord.com/api/oauth2/authorize?client_id=your_client_id_here&redirect_uri=https://your-netlify-url.netlify.app/callback&response_type=code&scope=identify`;

    // Check if a code exists in the URL (which is returned after Discord login)
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
        try {
            // Fetch user data from the Netlify function
            const response = await fetch(`/api/discordStatus?code=${code}`);
            const user = await response.json();

            if (user.error) {
                document.getElementById("status-text").innerText = "Error fetching status";
            } else {
                document.getElementById("status-text").innerText = `Hello, ${user.username}!`;
            }
        } catch (error) {
            console.error("Error fetching Discord status:", error);
        }
    } else {
        document.getElementById("status-text").innerText = "Login to see status";
    }
}

// Call the function when the page loads
fetchDiscordStatus();

