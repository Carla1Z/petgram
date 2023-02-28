const { Router } = require("express");
const categoriesRouter = require("./categoriesRouter");
const photosRouter = require("./photosRouter");
const usersRouter = require("./usersRouter");

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/photos", photosRouter);
router.use("/users", usersRouter);

module.exports = router;
