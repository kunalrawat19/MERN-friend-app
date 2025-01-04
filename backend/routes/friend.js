const express = require('express');
const { getUsers, sendRequest, getFriendRecommendations } = require('../controllers/friendController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/send-request', verifyToken, sendRequest);
router.get('/recommend', verifyToken, getFriendRecommendations);

module.exports = router;
