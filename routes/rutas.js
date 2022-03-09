const { Router } = require("express");
const { getHome, postChatbot } = require("../controller/user");
const router = Router();


router.get('/' , getHome);
router.post('/' , postChatbot);

module.exports = router;