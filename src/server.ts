import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import orgRoutes from './routes/organizations';
import serviceRoutes from './routes/services';
import incidentRoutes from './routes/incidents';
import incidentUpdatesRoutes from './routes/updates';
import userOrgRoutes from './routes/user-organization';
import usersRoutes from './routes/users';
import prisma from './db/client';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { setupWebSocket } from './sockets';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Swagger route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use("/api/v1/organizations", orgRoutes);
app.use("/api/v1/services", serviceRoutes);
app.use('/api/v1/incidents', incidentRoutes);
app.use('/api/v1/updates', incidentUpdatesRoutes);
app.use('/api/v1/user-organization', userOrgRoutes);
app.use('/api/v1/users', usersRoutes);

// Health check
app.get('/health', (_req: Request, res: Response) => {
    res.json({
        message: "Server is Up and Running!"
    });
});

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

export const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

setupWebSocket(io);

async function startServer() {
    try {
        await prisma.$connect();
        console.log('✅ Connected to the database');

        server.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to connect to the database:', error);
        process.exit(1);
    }
}

startServer();

