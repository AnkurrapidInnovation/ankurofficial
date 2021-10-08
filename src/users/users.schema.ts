import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class  Users {
    @Prop({ trim: true })
    firstName: string;
  
    @Prop({ trim: true })
    lastName: string;
  
    @Prop({ trim: true })
    userName: string;
  
    @Prop({ trim: true })
    email: string;
  
    @Prop({ default: false })
    emailVerified: boolean;
  
    @Prop()
    emailVerifiedOn: Date;
  
    @Prop()
    password: string;
  
    @Prop({ enum: [1, 2, 3], default: 1 }) //1-super admin, 2- sub admin, 3-Users(Bidders)
    userRole: number;
  
    @Prop({ type: Array, default: [] })
    wallets: Array<any>;
  
    @Prop({ default: true })
    active: boolean;
  
    @Prop({ default: false })
    subscribed: boolean;
  
    @Prop({ type: Date, default: Date.now() })
    createdAt: Date;
  }

export const CatSchema = SchemaFactory.createForClass(Users);