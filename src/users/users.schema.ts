import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Schema({ timestamps: true })
export class User extends Document {
  @Factory(() => uuidv4())
  @Prop({ default: () => uuidv4() })
  uuid: string;

  @Factory((faker) => faker.internet.email().toLowerCase())
  @Prop()
  username: string;

  @Factory(() => bcrypt.hashSync('secret', 10))
  @Prop()
  password: string;

  @Prop({ default: () => true })
  isActive: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
