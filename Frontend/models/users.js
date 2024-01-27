import mongoose from 'mongoose';

const Userchema = new mongoose.Schema(
  {
    name:{type: String,required: true,},
    email:{type: String,required: true,},
    password:{type:String,required: true,},
    type: {
      type: String, required: true,    
      enum: ['admin', 'buyer', 'seller'],
    },
    doneOn: { type: Date, default: Date.now, },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', Userchema);

export default User;