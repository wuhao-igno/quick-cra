import Router from "koa-router";
import demo from "./demo";

const router = new Router({ prefix: 'api' });

// url: /api/demo/**/*
router.use("/demo", demo.routes(), demo.allowedMethods());

export default router;
