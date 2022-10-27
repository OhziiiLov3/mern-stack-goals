

// @desc Register New User
// @route Post /api/users
// @access Public

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};


// @desc Authenicate User
// @route Post /api/login
// @access Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};



// @desc GET User DATA
// @route GET /api/users/me
// @access Public

const getMe = (req, res) => {
  res.json({ message: " User Data" });
};


module.exports = {
  registerUser,
  loginUser,
  getMe,
};