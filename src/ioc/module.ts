import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TestController } from '../application/controllers/TestController';
import TestService from '../application/services/TestService';

@Module({
  imports: [
    HttpModule.register({
      timeout: 30000,
    }),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class AppModule {}
