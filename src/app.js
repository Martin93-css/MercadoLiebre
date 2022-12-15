// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:"+ PORT)
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
// Definimos las rutas del login
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

// Definimos la rutas del registro 
app.get("/registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})