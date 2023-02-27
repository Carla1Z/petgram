const { Router } = require("express");
const categoriesRouter = require("./categoriesRouter");

const router = Router();

router.use("/categories", categoriesRouter);

module.exports = router;