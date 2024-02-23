import serverless from "serverless-http";
import { Server } from "./src/boostrap/server.boostrap.js";

const server = new Server();

export const handler = serverless(server.application);
