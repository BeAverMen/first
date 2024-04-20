import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'The age of a cat',
    default: 'Men',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The age ',
    default: 'Werdzxc534@gmail.com',
  })
  @IsString()
  email: string;
}
