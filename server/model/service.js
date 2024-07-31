const {Schema,model,Mongoose} = require("mongoose");

const serviceSchema = new Schema({
  product_name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  lifetime: {
    type: String,
    require: true,
  },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
