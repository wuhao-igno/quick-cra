import Koa from "koa";
import KoaBodyParser from "koa-bodyparser";
import router from "./routes";

const app = new Koa();

app
  .use(
    async (ctx, next): Promise<void> => {
      console.time("处理时间");
      await next();
      console.timeEnd("处理时间");
    }
  )
  // KoaBodyParse一定要在router之前引入
  .use(KoaBodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(5000);
console.log("server run at http://localhost:5000");
