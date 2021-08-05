import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as layouts from 'handlebars-layouts';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'resources', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'src', 'resources', 'partials'));
  hbs.handlebars.registerHelper(layouts(hbs.handlebars));
  hbs.handlebars.registerHelper(
    'assignJson',
    function (varName, varValue, options) {
      if (!options.data.root) {
        options.data.root = {};
      }
      options.data.root[varName] = JSON.parse(varValue);
    },
  );
  await app.listen(3000);
}
bootstrap();
