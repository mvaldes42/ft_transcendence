import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
//greg- import { UsersModule } from './users/users.module';
//greg- import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

/* Modules are classes, here app.module, annotated with the module decorator.
* Like any decorator, this adds metadata to a class or function.
* Modules can import other mmodules - here, UsersModule, DbModule, etc.
* They import controllers and providers too (see in users controllers and providers for defs)
* This one is the main module, it will import all the others.
*/

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
//greg- imports: [UsersModule, DatabaseModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}   //exporting means this class will be available for all other ones in the project

