import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize";
// controllers
import { UsersController } from "./users.controller";
// services
import { UsersService } from "./users.service";
// models
import { User } from "./users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";


@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles])
    ]
})
export class UsersModule {}
