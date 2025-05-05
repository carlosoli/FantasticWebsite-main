import { handler as baseHandler } from "@netlify/functions";
import { log } from "../vite";

const withLogging = (fn: (event: any) => Promise<{ statusCode: number; body: string }>) => {
  return async (event: any) => {
    const start = Date.now();
    const path = event.path;
    let response: { statusCode: number; body: string };
    
    try {
      response = await fn(event);
    } catch (err) {
      log(`ERROR ${path} 500 in ${Date.now() - start}ms :: ${err.message}`);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal Server Error" })
      };
    }

    log(`${event.httpMethod} ${path} ${response.statusCode} in ${Date.now() - start}ms`);
    return response;
  };
};

export const handler = baseHandler(withLogging(async (event) => {
  // Middleware de parse JSON/URL
  let body = {};
  if (event.body) {
    try {
      body = JSON.parse(event.body);
    } catch {
      body = {};
    }
  }

  // Rotas existentes
  if (event.path === "/api/health") {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "healthy" })
    };
  }

  // Adicionar novas rotas aqui
  // Exemplo:
  // if (event.path === "/api/outra-rota") {
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: "Rota funcionando" })
  //   };
  // }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Not Found" })
  };
}));
