# 🗳️ VoteSecure - Online Voting System

A secure, modern web-based voting platform built with Node.js, MongoDB, and Express. Features role-based authentication, Google OAuth integration, and real-time election management.

## ✨ Features

### 🔐 Authentication & Security
- **Dual Authentication**: Email/Password + Google OAuth 2.0
- **Role-Based Access**: Admin and Voter roles
- **Secure Sessions**: Express sessions with encryption
- **Password Hashing**: bcrypt for secure password storage
- **JWT Tokens**: For API authentication

### 👨‍💼 Admin Features
- **Election Management**: Create, update, and manage elections
- **Candidate Management**: Add/remove candidates for elections
- **Voter Management**: Control eligible voters per election
- **Real-time Results**: Live vote counting and analytics
- **Election Status Control**: Manage election lifecycle

### 🗳️ Voter Features
- **Secure Voting**: One vote per election with verification
- **Election Discovery**: View available elections
- **Vote History**: Track participation in past elections
- **Results Access**: View completed election results
- **Profile Management**: Manage voter information

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach
- **Modern Styling**: Clean, professional interface
- **Interactive Elements**: Smooth animations and transitions
- **Accessibility**: WCAG compliant design

## 🚀 Live Demo

**Production**: [https://online-voting-system-nom5.onrender.com](https://online-voting-system-nom5.onrender.com)

### Demo Credentials
- **Admin**: `ab@gmail.com` / `password`
- **Voter**: Register with Google OAuth or create new account

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Passport.js (Local + Google OAuth)
- **Templating**: EJS
- **Styling**: Modern CSS with CSS Variables
- **Security**: bcryptjs, express-session, JWT
- **Deployment**: Render

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Google Cloud Console project

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/abrajput22/online-voting-system.git
cd online-voting-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=3000
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

4. **Google OAuth Setup**
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create OAuth 2.0 credentials
- Add authorized redirect URI: `http://localhost:3000/auth/google/callback`

5. **Start the application**
```bash
npm start
# or for development
npm run dev
```

6. **Access the application**
- Open `http://localhost:3000`
- Admin user is automatically created on first run

## 🚀 Deployment

### Render Deployment

1. **Connect Repository**
   - Link your GitHub repository to Render
   - Choose "Web Service"

2. **Environment Variables**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/voting_system
SESSION_SECRET=production_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://your-app.onrender.com/auth/google/callback
JWT_SECRET=production_jwt_secret
NODE_ENV=production
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_admin_password
```

3. **Build Settings**
   - Build Command: `npm install`
   - Start Command: `npm start`

## 📁 Project Structure

```
online-voting-system/
├── config/
│   ├── database.js          # MongoDB connection
│   └── passport.js          # Authentication strategies
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── electionController.js # Election management
│   └── profileController.js # User profile management
├── middleware/
│   └── auth.js             # Authentication middleware
├── models/
│   ├── User.js             # User schema
│   ├── Election.js         # Election schema
│   ├── Candidate.js        # Candidate schema
│   └── Vote.js             # Vote schema
├── public/
│   ├── css/
│   │   └── styles.css      # Modern styling
│   └── js/
│       └── script.js       # Client-side scripts
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── admin.js            # Admin routes
│   ├── voting.js           # Voting routes
│   └── profile.js          # Profile routes
├── views/
│   ├── admin/              # Admin templates
│   ├── voting/             # Voting templates
│   └── *.ejs              # Main templates
├── utils/
│   └── tokenUtils.js       # JWT utilities
├── app.js                  # Main application file
└── package.json           # Dependencies
```

## 🔧 API Endpoints

### Authentication
- `GET /auth/login` - Login page
- `POST /auth/login` - Process login
- `GET /auth/register` - Registration page
- `POST /auth/register` - Process registration
- `GET /auth/google` - Google OAuth
- `GET /auth/logout` - Logout

### Admin Routes
- `GET /admin` - Admin dashboard
- `POST /admin/create` - Create election
- `POST /admin/status/:id` - Update election status
- `GET /admin/results/:id` - View results

### Voting Routes
- `GET /voting` - Voting dashboard
- `GET /voting/election/:id` - View election
- `POST /voting/vote` - Cast vote
- `GET /voting/results/:id` - View results

## 🔒 Security Features

- **Input Validation**: Comprehensive data validation
- **SQL Injection Prevention**: MongoDB ODM protection
- **XSS Protection**: Template escaping
- **CSRF Protection**: Session-based protection
- **Rate Limiting**: Prevent abuse
- **Secure Headers**: Security middleware
- **Environment Variables**: Sensitive data protection

## 🧪 Testing

```bash
# Run tests (if implemented)
npm test

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 📝 Usage Guide

### For Administrators
1. Login with admin credentials
2. Create new elections with candidates
3. Add eligible voters by Voter ID
4. Manage election status (upcoming → active → completed)
5. View real-time results and analytics

### For Voters
1. Register or login with Google
2. View available elections
3. Cast votes in eligible elections
4. View results of completed elections
5. Manage profile information

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Rajput**
- GitHub: [@abrajput22](https://github.com/abrajput22)
- Email: abhishekrajput20252025@gmail.com

## 🙏 Acknowledgments

- Express.js team for the robust framework
- MongoDB for the flexible database
- Passport.js for authentication strategies
- Google for OAuth 2.0 services
- Render for deployment platform

## 📞 Support

For support, email abhishekrajput20252025@gmail.com or create an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!**
