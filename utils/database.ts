import mongoose from 'mongoose';
import { environment } from '../environment/environment';

export class Database {

  private options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  public async createConnection() {
    await mongoose.connect(environment.DATABASE, this.options);
  }

}