# Seosaph Backend

This is the backend server for the **Seosaph** project, built using **Node.js** and **Express**. It provides real-time log streaming and API services for the frontend.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### 🔧 Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/pratapsinghaman12/seosaph-backend.git
cd seosaph-backend
npm install


---

### 🏃 Running the Server

To start the backend server, run:

```bash
npm start
```

The server will start at:

```
http://localhost:4000
```

> You can change the default port in `index.js`.

---

## 📡 Features

- ⚡ Real-time log streaming with **Socket.IO**
- 🔍 Log filtering based on log levels and sources
- 🛠 Easy to extend with databases or file-based logs
- 🔌 Ready to connect with frontend via WebSocket

---

## 📁 Project Structure

```
seosaph-backend/
├── index.js          # Entry point for the backend server
├── package.json      # Node.js dependencies and scripts
├── .gitignore        # Files ignored by Git
└── README.md         # Documentation
```

---

## 🔌 Socket.IO Events

The backend communicates using the following socket events:

- `connection`: Triggered when a client connects
- `disconnect`: Triggered when a client disconnects
- `logs`: Emits real-time log data to clients

---

## 🛠 Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)

---

## 🧪 Upcoming Improvements

- Unit testing with Jest
- `.env` environment variable support
- Support for file-based or database log storage
- Docker setup for containerized deployment

---

## 🙌 Author

Created by [Pratap Singh Aman](https://github.com/pratapsinghaman12)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---