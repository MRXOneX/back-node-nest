import { Model, Table, Column, DataType, BelongsToMany } from 'sequelize-typescript'
import { ApiProperty } from "@nestjs/swagger";
// model
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';


interface RoleCreationAttrs {

}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'unique role'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'descr', description: 'Description role'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;


    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}