import { IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEnum(['developer', 'tester'], { message: 'Assign correct role' })
  role: 'developer' | 'tester';
}
