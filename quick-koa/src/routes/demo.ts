import Router from "koa-router";

const router = new Router();
router
  // url: /api/demo/:id
  .get(
    "/:id",
    async (ctx): Promise<void> => {
      const { id } = ctx.params;
      ctx.response.body = {
        id,
      };
      return ctx.response.body;
    }
  );

export default router;
