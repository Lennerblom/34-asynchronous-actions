'use strict';

import mongoose from 'mongoose';

const PeopleSchema = mongoose.Schema({
  Name: {type:String, required:true},
  Age: {type:Number},
  chore: {type: mongoose.Schema.Types.ObjectId, ref: 'Chores'},
  
});

export default mongoose.model('People', PeopleSchema);