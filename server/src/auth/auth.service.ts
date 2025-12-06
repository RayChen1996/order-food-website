import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterInput } from './dto/register.input';
import { LoginInput } from './dto/login.input';
import { AuthPayload } from './models/auth-payload.model';
import { User } from './models/user.model';

interface StoredUser extends User {
  password: string;
}

@Injectable()
export class AuthService {
  private users: StoredUser[] = [];

  async register(input: RegisterInput): Promise<AuthPayload> {
    const normalizedEmail = input.email.toLowerCase();
    const existingUser = this.users.find((user) => user.email === normalizedEmail);

    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    const newUser: StoredUser = {
      id: (this.users.length + 1).toString(),
      name: input.name,
      email: normalizedEmail,
      phone: input.phone,
      address: input.address,
      password: input.password,
      createdAt: new Date(),
    };

    this.users.push(newUser);

    return this.buildAuthPayload(newUser);
  }

  async login({ email, password }: LoginInput): Promise<AuthPayload> {
    const normalizedEmail = email.toLowerCase();
    const user = this.users.find(
      (storedUser) => storedUser.email === normalizedEmail && storedUser.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.buildAuthPayload(user);
  }

  private buildAuthPayload(user: StoredUser): AuthPayload {
    return {
      token: this.createToken(user),
      user: this.sanitizeUser(user),
    };
  }

  private sanitizeUser(user: StoredUser): User {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }

  private createToken(user: StoredUser): string {
    const tokenSeed = `${user.id}:${user.email}:${user.createdAt.toISOString()}`;
    return Buffer.from(tokenSeed).toString('base64');
  }
}
