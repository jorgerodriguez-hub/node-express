import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: String,
      required: true,
      trim: true,
    },
    fecha_nacimiento: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Client", clientSchema);
