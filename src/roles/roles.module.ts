import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize";
// controller
import { RolesController } from "./roles.controller";
// service
import { RolesService } from "./roles.service";
// model
import { Role } from "./roles.model"
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";


@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
    ],
    exports: [
        RolesService
    ]
})
export class RolesModule {}