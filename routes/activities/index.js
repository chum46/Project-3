const router = require("express").Router();
const activityRoutes = require("./activities");

// Book routes
router.use("/activities", activityRoutes);

module.exports = router;
