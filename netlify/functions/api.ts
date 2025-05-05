import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Exemplo de resposta da API
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'API do portal Jesus Alves Amazonas funcionando!',
      timestamp: new Date().toISOString(),
      path: event.path
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
