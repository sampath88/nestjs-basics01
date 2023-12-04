import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreet(): string {
    return 'Hi welcome!';
  }
  sayHello(): string {
    return 'Hello World!';
  }
}
