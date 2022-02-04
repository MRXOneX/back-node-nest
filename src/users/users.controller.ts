import { Controller, Post, Body, Get } from "@nestjs/common";
// swagger
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
// dto
import { CreateUserDto } from "./dto/create-user.dto";
// service
import  { UsersService } from "./users.service";
// model
import { User } from "./users.model";


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

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

}