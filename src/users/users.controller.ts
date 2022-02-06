import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
// swagger
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
// dto
import { CreateUserDto } from "./dto/create-user.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
// service
import  { UsersService } from "./users.service";
// guard
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import { RolesGuard } from "../auth/roles.guard"
// decorator
import { Roles } from "../auth/roles-auth.decorator"
// pipes
import { ValidationPipe } from "../pipes/validation.pipe"
// model
import { User } from "./users.model";


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post('create')
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Get users"})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }


    @ApiOperation({summary: "give role"})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }


    @ApiOperation({summary: 'Ban user'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto)
    }

}