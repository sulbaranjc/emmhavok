const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "MONGODB_URI=mongodb://localhost/EmmahavokClient";

// useNewUrlParser, useCreateIndex y useFindAndModify se eliminaron en Mongoose 6
// (ya son el comportamiento por defecto) — se quitaron al actualizar por seguridad.
mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
