import serverless from "serverless-http";
import { Server } from "./boostrap/server.boostrap.js";

export const handler = async (event, context) => {
  const server = new Server();
  return serverless(server.application)(event, context);
};
