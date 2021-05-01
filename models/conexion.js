const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const ConexionSchema = Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  start_conecction: Date,
  end_conecction: Date,
  
});



module.exports = mongoose.model("Conexion", ConexionSchema);