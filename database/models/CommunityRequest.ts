import mongoose from 'mongoose';
import { CommunityRequestState, CommunityRequestType } from '../../constants/enums';

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
  user: {
    type: Schema.Types.Mixed,
    default: {},
  },
  approves: {
    type: [String],
    default: [],
  },
  state: {
    type: String,
    enum: Object.values(CommunityRequestState),
    default: CommunityRequestState.REVIEW,
  },
},
{
  timestamps: true,
});

export const CommunityRequest = mongoose.models.CommunityRequest || mongoose.model('CommunityRequest', CommunityRequestModel);
