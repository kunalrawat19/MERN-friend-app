const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('username');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.sendRequest = async (req, res) => {
  const { toUserId } = req.body;
  const fromUserId = req.userId;

  try {
    const toUser = await User.findById(toUserId);
    if (!toUser) return res.status(404).json({ message: 'User not found' });

    toUser.friendRequests.push(fromUserId);
    await toUser.save();

    res.status(200).json({ message: 'Friend request sent' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending request' });
  }
};

exports.getFriendRecommendations = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).populate('friends');
    const friends = user.friends.map(friend => friend._id);

    const recommendations = await User.find({
      _id: { $nin: [...friends, userId] },
      friends: { $in: friends },
    })
      .select('username')
      .limit(10);

    res.status(200).json(recommendations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
};
