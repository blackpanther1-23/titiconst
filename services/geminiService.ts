import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Ești asistentul virtual inteligent al firmei de construcții Titiconst din Bacău. 
Titiconst are peste 25 de ani de experiență (din 1998) în:
- Construcții civile și industriale (case la roșu, hale metalice).
- Reabilitări și renovări moderne.
- Lucrări de beton armat și fundații.
- Amenajări exterioare (garduri, platforme, pavaje).

Tonul tău trebuie să fie profesional, de încredere și util. 
Răspunde scurt și la obiect la întrebările clienților despre serviciile noastre, procesul de construcție sau cum pot obține o ofertă. 
Dacă întreabă de contact, oferă-le datele: Telefon 0740807947, Email titiconst@yahoo.com, Adresa Strada Militari 35A, Bacău.
Dacă nu știi ceva, recomandă-le să discute direct cu echipa tehnică prin butonul "Cere Ofertă".
Răspunde doar în limba română.
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    // Initialize GoogleGenAI with the API key from environment variable directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Access the .text property directly (not as a function)
    return response.text || "Ne pare rău, a intervenit o eroare. Vă rugăm să ne contactați telefonic.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Momentan asistentul AI este indisponibil. Vă rugăm să ne scrieți pe email.";
  }
};