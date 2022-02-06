import { forwardRef, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize";
// controllers
import { UsersController } from "./users.controller";
// services
import { UsersService } from "./users.service";
// models
import { User } from "./users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Post } from "../posts/posts.model"
// module
import { RolesModule } from "src/roles/roles.module";
import { AuthModule } from "../auth/auth.module";


@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, Post]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
