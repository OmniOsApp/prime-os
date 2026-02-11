
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const analyzeSymptoms = async (symptoms: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise os sintomas: "${symptoms}"`,
      config: {
        systemInstruction: "Você é a inteligência operacional oficial da Prime Odontologia. Sua função é dar suporte clínico e de vendas. Siga rigorosamente a filosofia: Valor antes de preço, Pessoas antes de procedimentos. Se o paciente relatar dor, sugira uma avaliação (Low Ticket). Se o interesse for estético, direcione para Mid ou High Ticket conforme o perfil. Seja empático, calmo e profissional.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Analysis error:", error);
    return "Não foi possível realizar a análise no momento.";
  }
};

export const generateSalesScript = async (context: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Gere um script de WhatsApp para o seguinte contexto: "${context}"`,
      config: {
        systemInstruction: "Você é um Consultor de Vendas Odontológicas da Prime Odontologia. Siga a Escada de Valor: Low (Limpeza/Checkup), Mid (Clareamento/Resina), High (Invisalign/Lentes). Regras: Nunca venda preço antes do valor. Identifique a dor emocional do paciente. Use linguagem acolhedora. Foque no agendamento da avaliação.",
      }
    });
    return response.text;
  } catch (error) {
    return "Erro ao gerar script.";
  }
};

export const getLatestWebsiteInsights = async (query: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Pesquise no site primeodontologia.com.br sobre: "${query}". Retorne os tópicos principais, novidades e artigos recentes de forma resumida para uso interno da franquia.`,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Você é um analista de conteúdo institucional da Prime Odontologia. Extraia informações precisas do domínio oficial para manter a equipe atualizada.",
      },
    });
    return {
      text: response.text,
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Website Insight error:", error);
    return null;
  }
};
