// Netlify Function - Secure Backend for TenseLabAI Chat
// Your API key is stored as environment variable on Netlify and NEVER exposed

exports.handler = async (event) => {
    // Set CORS headers to allow requests from your website
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers };
    }

    // Only accept POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Only POST requests allowed' })
        };
    }

    try {
        // Parse request body
        const { message } = JSON.parse(event.body);

        // Validate message
        if (!message || message.trim() === '') {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message cannot be empty' })
            };
        }

        // Get API key from environment variables
        const API_KEY = process.env.GROQ_API_KEY;

        if (!API_KEY) {
            console.error('GROQ_API_KEY environment variable is not set');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    error: 'API key not configured on server. Please add GROQ_API_KEY to Netlify environment variables.',
                    choices: [] 
                })
            };
        }

        console.log('Sending request to Groq API with message:', message.substring(0, 50) + '...');

        // Make request to Groq API
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are TenseLab, an AI Grammar Detective. Answer questions about English verb tenses clearly and concisely in 1-2 sentences.'
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });

        // Check if response is ok
        if (!groqResponse.ok) {
            const errorData = await groqResponse.json();
            console.error('Groq API Error:', errorData);
            return {
                statusCode: groqResponse.status,
                headers,
                body: JSON.stringify({
                    error: `Groq API error: ${errorData.error?.message || 'Unknown error'}`,
                    choices: []
                })
            };
        }

        const responseData = await groqResponse.json();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(responseData)
        };

    } catch (error) {
        console.error('Backend error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: `Server error: ${error.message}`,
                details: error.toString(),
                choices: []
            })
        };
    }
};
