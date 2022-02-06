import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    
    @ApiProperty({example: 'ADMIN', description: 'name role'})
    readonly value: string

    @ApiProperty({example: 'Description', description: 'Description role'})
    readonly description: string
}