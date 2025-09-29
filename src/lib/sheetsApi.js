export const WEB_APP_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxcY1l6ZbUq4X75rW8JPipmSAO0jmqTtOrlL32632nOgsEEIb_DHpW7gmdF25KYoekg/exec";

export async function saveData(body) {
  if (body?.website) return { ok: true, skippedByHoneypot: true };

  try {
    await fetch(WEB_APP_SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, 
      body: JSON.stringify(body),
      mode: "no-cors",      
      keepalive: true,      
      cache: "no-store",
    });
    return { ok: true, blind: true };
  } catch (err) {
    console.error("Error saving data to Google Sheets:", err);
    throw err;
  }
}
