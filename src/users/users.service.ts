import { Injectable } from "@nestjs/common"
//
import { InjectModel } from "@nestjs/sequelize";
// models
import { User } from "./users.model";
// dto
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) { }


    async createUser(dto: CreateUserDto) {
        return await this.userRepository.create(dto)
    }

    async getUsers() {
        return await this.userRepository.findAll()
    }
}