import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    signOptions: { expiresIn: '60s'},
    secret: 'hide-me'
  })],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
