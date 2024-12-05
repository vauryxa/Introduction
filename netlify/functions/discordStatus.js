const axios = require("axios");

const CLIENT_ID = "your_client_id_here";
const CLIENT_SECRET = "your_client_secret_here";
const REDIRECT_URI = "https://your-netlify-url.netlify.app/callback"; // Update this with your deployed redirect URI

exports.handler = async (event, context) => {
    const { code } = event.queryStringParameters;

    if (!code) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Code not provided" }),
        };
    }

    try {
        // Exchange code for an access token
        const tokenResponse = await axios.post(
            "https://discord.com/api/oauth2/token",
            new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "authorization_code",
                code: code,
                redirect_uri: REDIRECT_URI,
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const { access_token } = tokenResponse.data;

        // Fetch user data using the access token
        const userResponse = await axios.get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const user = userResponse.data;

        // Return the user data as a response
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    } catch (error) {
        console.error("Error during OAuth2 flow:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred" }),
        };
    }
};
