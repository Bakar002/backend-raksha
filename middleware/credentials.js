const whitelist = [
  // "https://rakshaanimal.org", // Your frontend production URL
  // "https://animal-rescue-india.netlify.app",
  "https://raksha-alpha.vercel.app",
  // "http://localhost:5173", // For local development
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  console.log("Origin: " + origin);

  if (whitelist.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // Allow specific origin
    res.header("Access-Control-Allow-Credentials", "true"); // Enable credentials
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  }

  // Handle preflight request (OPTIONS method)
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // No content
  }

  next();
};

module.exports = credentials;
