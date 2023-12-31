import express from "express";
import { routerLibraries } from "./src/routes/libraries-routes.js";
import { routerBooks } from "./src/routes/book-routes.js";
import { createUser } from "./src/services/user-service.js";
import { routesUser } from "./src/routes/user-routes.js";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandlerMiddleware.js";
import { initializeAuthentication } from "./src/auth/auth.js";
import { allowCrossDomain } from "./src/middlewares/allowCrossDomain.js";


const app = express();

app.use(express.json());

//Crear usuario inicial
createUser();

//inicializar autenticacion de usuario
initializeAuthentication();

//Permitir CORS
app.use(allowCrossDomain);

app.use('/library', routerLibraries);
app.use('/book', routerBooks);
app.use('/user', routesUser);
app.use(errorHandlerMiddleware);

app.get('/', (req, res) => {
    res.send('Test connect front -> back');
});

app.listen(3000, () => {
    console.log('Servidor iniciado...!');
});