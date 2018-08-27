'use strict';

import mongoose, {Schema} from 'mongoose';

const ChoresSchema = mongoose.Schema({
  choreID: {type:Schema.Types.ObjectId, ref:'People'},
  chore: {type:String, required:true},
  assignedTo: {type:String, default:'unassigned'},
  completed: {type:Boolean},
  assignedDate: {type:Date},
  timesPerWeek: {type:Number},
  
});

export default mongoose.model('Chores', ChoresSchema);