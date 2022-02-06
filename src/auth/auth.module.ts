import { forwardRef, Module } from "@nestjs/common";
//
import { JwtModule } from "@nestjs/jwt";
// controller
import { AuthController } from "./auth.controller"
// service
import { AuthService } from "./auth.service"
// module
import { UsersModule } from "src/users/users.module";


@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}