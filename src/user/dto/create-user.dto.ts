import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    description: 'The age of a cat',
    default: 'Men',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The age of a cat',
    default: 'Werdzxc534@gmail.com',
  })
  @IsString()
  email: string;
}
