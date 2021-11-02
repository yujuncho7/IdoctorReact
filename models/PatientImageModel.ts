import mongoose, { Schema, model } from "mongoose";

export interface IPatientImage {
  patient: mongoose.Types.ObjectId;
  filename: string;
  img: {
    data: Buffer;
    contentType: string;
  };
}

const patientImageSchema = new Schema<IPatientImage>({
  patient: { type: mongoose.Types.ObjectId, required: true, ref: "Patient" },
  filename: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

const PatientImageModel = model<IPatientImage>(
  "PatientImage",
  patientImageSchema
);

export default PatientImageModel;
