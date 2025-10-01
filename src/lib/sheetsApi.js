export const WEB_APP_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz5I2M-zhjsKgnVfoYRo_5UdQCpKZnfSNlvQSTZ8JQKL3Y4inHsl8ZjGpkhurxeGUdugA/exec";

export async function saveData(body) {
  await fetch(WEB_APP_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",                             
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body),
  });
}