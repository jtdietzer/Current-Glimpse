# **Current Glimpse**

### **Description**
Current Glimpse is a trusted news platform leveraging blockchain technology to verify the authenticity of articles. It provides users with verified news, categorized stories, and trending topics in an easy-to-navigate interface.

---

### **Features**
- Blockchain-based article verification system:
  - **Green badge**: Verified.
  - **Yellow badge**: Pending verification.
  - **Red badge**: Not verified.
  - **Blue badge**: Verified but edited.
- Dynamic top stories, most popular articles, and category-based browsing.
- Lazy loading and infinite scroll for better performance.
- Error boundary and fallback for a seamless user experience.

---

### **Tech Stack**
#### **Frontend**
- React 18 & 19
- React Router
- Redux Toolkit
- React Hook Form
- Axios

#### **Backend**
- Node.js
- Express
- PostgreSQL
- Blockchain integration for verification

#### **Other Tools**
- Web Vitals for performance monitoring
- CSS Modules for styling
- Firebase for authentication (optional)

---

### **Installation**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/jtdietzer/current-glimpse.git
   cd current-glimpse
   ```

2. **Set up the backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**:
   ```bash
   cd client
   npm install
   ```

4. **Start the servers**:
   - **Backend**:
     ```bash
     cd backend
     npm start
     ```
   - **Frontend**:
     ```bash
     cd client
     npm start
     ```

---

### **Usage**
1. Navigate to `http://localhost:3000` to view the frontend.
2. The backend runs on `http://localhost:5000`, preconfigured with routes for article data and blockchain verification.

---

### **File Structure**
#### **Frontend**
```plaintext
client/
├── public/                  # Public assets
├── src/
│   ├── components/          # Shared React components
│   ├── pages/               # Route-specific pages (e.g., Home, ArticlePage)
│   ├── styles/              # Global and component-specific CSS
│   ├── hooks/               # Custom hooks
│   ├── contexts/            # Context API files
│   ├── App.jsx              # Main app component
│   ├── index.js             # Entry point
└── README.md
```

#### **Backend**
```plaintext
backend/
├── config/                  # Database and environment configurations
├── controllers/             # Route handlers
├── models/                  # Database models
├── routes/                  # API routes
├── services/                # Utility services (e.g., blockchain verification)
├── tests/                   # Unit and integration tests
├── server.js                # Backend entry point
└── README.md
```

---

### **API Endpoints**
#### **Backend**
- **Articles**: 
  - `GET /api/articles` – Fetch all articles.
  - `GET /api/articles/:id` – Fetch a specific article.
- **Verification**:
  - `POST /api/verify` – Verify an article using blockchain.

---

### **Contributing**
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push to your fork:
   ```bash
   git push origin feature-name
   ```
4. Open a pull request.

---

### **License**
This project is licensed under the MIT License. See `LICENSE` for more details.

---

### **Contact**
If you have any questions, feel free to reach out:
- **Email**: [jacobdietzer@currentglimpse.com](mailto:jacobdietzer@currentglimpse.com)
- **GitHub**: [jtdietzer](https://github.com/jtdietzer)

---
