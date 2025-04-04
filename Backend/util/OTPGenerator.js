function generateOTP(length = 6) {
  const characters = "0123456789"; // Use digits for OTP
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}

const otp = generateOTP(6); // You can change the length here, default is 6
console.log(`Generated OTP: ${otp}`);

module.exports = { generateOTP };
