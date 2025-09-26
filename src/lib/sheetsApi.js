export const WEB_APP_SHEETS_API_KEY = "";


export async function saveData(body){
  try{
    await fetch(WEB_APP_SHEETS_API_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8" ,
      },
      body: JSON.stringify(body),
      mode: "no-cors",
    });
  } catch (error) {
    console.error("Error saving data to Google Sheets:", error);
    throw error;
  }  
}