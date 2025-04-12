const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());

const logs = [];
const LEVELS = ['INFO', 'WARN', 'ERROR'];
const SERVICES = ['auth', 'payments', 'notifications'];

function generateRandomLog() {
  const log = {
    id: uuidv4(),
    timestamp: new Date(),
    level: LEVELS[Math.floor(Math.random() * LEVELS.length)],
    service: SERVICES[Math.floor(Math.random() * SERVICES.length)],
    message: 'Log message ' + Math.floor(Math.random() * 1000)
  };
  logs.push(log);
  io.emit('new_log', log);
}

setInterval(generateRandomLog, 1000);

app.get('/logs', (req, res) => {
    const recentLogs = logs.slice(-50); 
    res.json({ logs: recentLogs });
  });
  

app.get('/logs/stats', (req, res) => {
  const seconds = parseInt(req.query.seconds) || 60;
  const cutoff = new Date(Date.now() - seconds * 1000);
  const recentLogs = logs.filter(log => new Date(log.timestamp) >= cutoff);

  const stats = {
    total: recentLogs.length,
    perLevel: {
      INFO: 0,
      WARN: 0,
      ERROR: 0
    },
    averagePerSecond: 0,
    errorRate: 0
  };

  recentLogs.forEach(log => stats.perLevel[log.level]++);
  stats.averagePerSecond = (recentLogs.length / seconds).toFixed(2);
  stats.errorRate = (stats.perLevel.ERROR / recentLogs.length || 0).toFixed(2);

  res.json(stats);
});

server.listen(4000, () => console.log('Backend running on http://localhost:4000'));
