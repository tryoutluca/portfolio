import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { YOUR_API_KEY } from './secrets';

export const PhilosophyQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': YOUR_API_KEY },
      contentType: 'application/json',
      success: function(result) {
        console.log(result);
        // Angenommen, result ist ein Array und das erste Element soll angezeigt werden
        if (result && result.length > 0) {
          setQuote(result[0]);
        } else {
          setError('Kein Zitat gefunden.');
        }
        setLoading(false);
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        setError(jqXHR.responseText);
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <div>Lädt...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="philosophy-quote-container">
      {quote && (
        <>
          <blockquote>"{quote.quote}"</blockquote>
          <p>- {quote.author}</p>
        </>
      )}
    </div>
  );
};
