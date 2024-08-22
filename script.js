const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextInput.value.trim();

    if (mytext) {
        try {
            const response = await fetch(`https://c-v1.onrender.com/api/bard?prompt=${encodeURIComponent(mytext)}`, {
                method: 'GET', // Assuming the API uses GET method; adjust if POST is required
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${API_KEY}`, // Uncomment if the API requires an API key
                },
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.answer; // Adjust based on the actual API response structure
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        }
    }
});
