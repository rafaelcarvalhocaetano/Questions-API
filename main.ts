import { Server } from "./server";
import { environment } from "./environment/environment";

const server = new Server();
server.app.listen(3000, () => console.log('--- QUIZZ API --- '));