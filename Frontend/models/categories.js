import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
    {
      name: {type:String, required: true,},
      doneOn: { type: Date, default: Date.now, }, 
    },
  { timestamps: true }
);

const Categories = mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);

export default Categories;
