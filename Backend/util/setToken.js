const setTokenCookie = (res, token) => {
  res.cookie("jwt", token, {
    httpOnly: true, // Prevents JavaScript access
    secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
    sameSite: "Strict", // CSRF Protection
    maxAge: 3600000, // 1 hour expiration
  });
};

module.exports = setTokenCookie;
