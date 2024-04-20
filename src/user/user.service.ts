import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateUserDto) {
    console.log('test', data);
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(data: number) {
    return this.prisma.user.findUnique({
      where: { id: data },
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
