// Backend function - keeps API key SECRET on Netlify server
exports.handler = async (event) => {
    try {
        // Only accept POST requests
        if (event.httpMethod !== "POST") {
            return { statusCode: 405, body: "Method Not Allowed" };
        }

        // Get the user's message from the request
        const { message } = JSON.parse(event.body);

        if (!message) {
            return { statusCode: 400, body: JSON.stringify({ error: "No message provided" }) };
        }

        // Get the SECRET API key from Netlify environment
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
            return { statusCode: 500, body: JSON.stringify({ error: "API key not configured" }) };
        }

        // Call Groq API with the secret key
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: "You are an AI Grammar Detective named TenseLab. Help students analyze English verb tenses. Keep responses short (1-2 sentences), clear, and educational."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        const data = await response.json();

        // Return the response to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Backend Chat Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
