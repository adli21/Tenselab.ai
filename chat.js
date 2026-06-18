exports.handler = async (event) => {
    // Only handle POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" })
        };
    }

    try {
        // Parse the incoming message
        const body = JSON.parse(event.body);
        const userMessage = body.message;

        if (!userMessage) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "No message provided" })
            };
        }

        // Get the API key from environment variables (stored in Netlify)
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "API key not configured on server" })
            };
        }

        // Make request to Groq API
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: "You are TenseLab, an AI Grammar Detective. Help students understand English verb tenses in 1-2 clear sentences."
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        const responseData = await groqResponse.json();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(responseData)
        };

    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server error: " + error.message })
        };
    }
};
