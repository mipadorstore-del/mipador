// export async function handler(event, context) {
//   const response = await fetch("https://script.google.com/macros/s/AKfycbzIipteyDYaUeVA1qpamd9J9hCA4KOPkOq-jzyMn6VSmOizU9A50JwXDSEYVJk_bxQ_rg/exec", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: event.body
//   });

//   const data = await response.text();

//   return {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "application/json"
//     },
//     body: data
//   };
// }
