import mongoose from 'mongoose';
import { CommunityRequestType } from '../../constants/enums';

const { Schema } = mongoose;

const CommunityRequestModel = new mongoose.Schema({
  title: {
    type: String,
  },
  descriptionData: {
    type: Schema.Types.Mixed,
    default: {},
  },
  type: {
    type: String,
    enum: Object.values(CommunityRequestType),
  },
},
{
  timestamps: true,
});

export const CommunityRequest = mongoose.models.CommunityRequest || mongoose.model('CommunityRequest', CommunityRequestModel);
