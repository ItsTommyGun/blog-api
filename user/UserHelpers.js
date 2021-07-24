var User = require("./User");

async function getRoleForUser(userId) {
    const user = await User.findById(userId).lean().exec();
    return user.role;
}

module.exports = { getRoleForUser };
