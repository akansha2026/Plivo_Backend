"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const organizations_1 = __importDefault(require("./routes/organizations"));
const services_1 = __importDefault(require("./routes/services"));
const incidents_1 = __importDefault(require("./routes/incidents"));
const updates_1 = __importDefault(require("./routes/updates"));
const user_organization_1 = __importDefault(require("./routes/user-organization"));
const users_1 = __importDefault(require("./routes/users"));
const client_1 = __importDefault(require("./db/client"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const sockets_1 = require("./sockets");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Swagger route
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// API routes
app.use("/api/v1/organizations", organizations_1.default);
app.use("/api/v1/services", services_1.default);
app.use('/api/v1/incidents', incidents_1.default);
app.use('/api/v1/updates', updates_1.default);
app.use('/api/v1/user-organization', user_organization_1.default);
app.use('/api/v1/users', users_1.default);
// Health check
app.get('/health', (_req, res) => {
    res.json({
        message: "Server is Up and Running!"
    });
});
const PORT = process.env.PORT || 3001;
const server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
(0, sockets_1.setupWebSocket)(exports.io);
async function startServer() {
    try {
        await client_1.default.$connect();
        console.log('✅ Connected to the database');
        server.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to connect to the database:', error);
        process.exit(1);
    }
}
startServer();
