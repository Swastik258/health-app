const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const agent = require("@sixthsense/sixthsense-node-js").default;

require('dotenv').config();


try {
  agent.start({
    serviceName: 'HEALTH-APP',  // HARDCODED SERVICE NAME

    directServers: "grpc-collector-observability.sixthsense.rakuten.com:443",
    collectorAddress: "grpc-collector-observability.sixthsense.rakuten.com:443",
    enableLogs: true,
    caPath: true,
       authorization: "eyJhbGciOiJIUzI1NiJ9.eyJiaWxsaW5nX2lkIjoiMTUwNzNkZWYtNDhlZC00M2UwLTg0ODUtMjkyOTIzYzRiOTdiIiwidGVhbUlkIjoiY2RiMTM2ZTMtMjRhYi00N2VmLWIyYjAtYzZkY2U0YmFiNGQ2IiwiYXVkIjoib2FwIiwiaXNzIjoic2l4dGgtc2Vucy1hdXRoIiwiaWF0IjoxNzYzOTcxODUxfQ.kNyuahPftkOKjq6XIHVK6QKY9e40T4FF1UlyWzSvWiQ",  // HARDCODED TOKEN

});
  console.log('✅ Sixth Sense monitoring started');
} catch (error) {
  console.warn('⚠️ Sixth Sense failed to start:', error.message);
  // Continue without monitoring if Sixth Sense fails
}

// Import routes
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

// Connect to Database
connectDB();

// MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log('📊 MongoDB connected successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error(`❌ MongoDB connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('⚠️  MongoDB disconnected');
});

// Routes
app.use('/api/auth', authRoutes);

// Health Check Endpoint
app.get('/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        database: dbStatus,
        uptime: process.uptime()
    });
});

// Root Endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Stindr API Server',
        version: '1.0.0',
        endpoints: {
            auth: {
                register: 'POST /api/auth/register',
                login: 'POST /api/auth/login'
            },
            health: 'GET /health'
        }
    });
});

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('🚨 Error:', err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        success: false,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV}`);
});