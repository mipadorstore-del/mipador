import fetch from "node-fetch"; // optional if using ES modules

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    // Send data to your Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzIipteyDYaUeVA1qpamd9J9hCA4KOPkOq-jzyMn6VSmOizU9A50JwXDSEYVJk_bxQ_rg/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: result.status || "success",
        message: result.message || "Order saved!"
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: err.message
      })
    };
  }
}
