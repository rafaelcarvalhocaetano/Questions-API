import { Server } from "./server/server";
import { environment } from "./environment/environment";

const server = new Server();
server.app.listen(environment.PORT, () => console.log('--- QUIZZ API --- '));