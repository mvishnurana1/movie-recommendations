import React, { useEffect } from 'react';

const YourComponent = () => {
  const apiKey = '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'; // Replace with your actual API key
  const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    prompt: 'Translate the following English text to French: {your_text_here}',
    max_tokens: 50,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default YourComponent;
