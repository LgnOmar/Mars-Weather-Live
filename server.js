const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
    'http://localhost:5500',
    'http://127.0.0.1:5500'
  ];

// Allow specific origins
app.use(cors({
    origin: allowedOrigins,
    methods: 'GET',
    allowedHeaders: ['Content-Type']
  }));

// Proxy endpoint for NASA API
app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/insight_weather/?api_key=${process.env.NASA_API_KEY}&feedtype=json&ver=1.0`
    );
    res.json(response.data);
  } catch (error) {
    console.error("NASA API Error:", error.message)
    return res.status(500).json({
        error: "failed to fetch data from NASA API",
        details: error.message
    })
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});