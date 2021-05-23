import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UserRepository } from './repository/auth.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
        async signUp(authCredentialsDto: AuthCredentialsDto) {
        return this.userRepository.signUp(authCredentialsDto);
    }

}