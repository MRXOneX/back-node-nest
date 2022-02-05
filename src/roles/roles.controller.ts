import { Controller, Post, Get, Body, Param } from "@nestjs/common"
//
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
// service
import { RolesService } from "./roles.service";
// dto
import { CreateRoleDto } from "./dto/create-role.dto";
// model
import { Role } from "./roles.model";


@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}


    @ApiOperation({summary: 'Create role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto)
    }


    @ApiOperation({summary: 'Get role'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getRole(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}