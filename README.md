# Wellbeing Organic - Full Stack Application

Complete full stack application with Node.js backend and frontend.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install all dependencies (backend dependencies are at root level):

```bash
npm install
```

2. If you have a separate frontend with its own package.json:

```bash
cd Frontend
npm install
cd ..
```

3. Create a `.env` file from the example:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration values.

### Running the Application

**Backend Development mode (with auto-reload):**

```bash
npm run dev
```

or

```bash
npm run dev:backend
```

**Backend Production mode:**

```bash
npm start
```

**Frontend (if separate):**

```bash
npm run dev:frontend
```

The backend server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📁 Project Structure

```
Wellbeingorganic/
├── Backend/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── Frontend/            # Frontend application
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore file
├── package.json         # Root dependencies (Backend + Frontend)
└── README.md            # This file
```

## 🔌 API Endpoints

### Health Check

- `GET /api/health` - Check API health status

### Base URL

- `GET /` - API information

## 🛠️ Technologies Used

### Backend

- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

## 📝 Next Steps

1. Set up database connection (MongoDB, PostgreSQL, etc.)
2. Implement authentication (JWT)
3. Create API routes for your features
4. Add validation middleware
5. Set up error handling
6. Add API documentation (Swagger/OpenAPI)
7. Set up frontend framework (React, Vue, etc.)

## 📄 License

ISC

# wellbeing_organic

skin care product
