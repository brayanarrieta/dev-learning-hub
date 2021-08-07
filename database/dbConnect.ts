import mongoose from 'mongoose';
import { MONGO_URI } from '../constants/config';

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // eslint-disable-next-line no-multi-assign

  cached = { conn: null, promise: null };
  // @ts-ignore
  global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    cached.promise = await mongoose.connect(MONGO_URI, opts);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
