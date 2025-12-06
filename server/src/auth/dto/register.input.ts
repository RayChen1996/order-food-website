import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  ValidateIf,
} from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field({ nullable: true })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  address?: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}
