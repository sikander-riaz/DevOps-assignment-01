# ⚡ Vite Todo App

A lightning-fast, modern todo application built with **React**, **Vite**, and deployed with **GitHub Actions** to **AWS EC2**. Features a sleek UI, comprehensive testing, and automated CI/CD pipeline.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## ✨ Features

- 🚀 **Lightning Fast**: Built with Vite for instant dev server and optimized builds
- ⚛️ **Modern React**: Uses React 19 with modern hooks and patterns
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✅ **Complete CRUD**: Add, edit, delete, and mark todos as complete
- 📊 **Progress Tracking**: Visual progress indicators and statistics
- 🧪 **Fully Tested**: Comprehensive test suite with 91%+ coverage
- 🔍 **Code Quality**: ESLint configuration with strict rules
- 🚀 **Auto Deployment**: CI/CD pipeline with GitHub Actions to AWS EC2
- 💚 **Health Checks**: Built-in health monitoring and error handling
- 🎨 **Modern UI**: Clean, intuitive interface with emoji indicators

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

### Testing

- **Vitest** - Fast unit testing framework
- **@testing-library/react** - React testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers
- **jsdom** - DOM environment for testing

### Development Tools

- **ESLint** - Code linting with React-specific rules
- **GitHub Actions** - CI/CD automation
- **Coverage Reports** - V8 code coverage analysis

### Production

- **Express.js** - Production server
- **AWS EC2** - Cloud hosting
- **Self-hosted GitHub Runner** - Deployment automation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd todo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Opens at `http://localhost:5173`

4. **Run tests**

   ```bash
   npm run test:ci
   ```

5. **Lint code**

   ```bash
   npm run lint
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build optimized production bundle        |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint code analysis                 |
| `npm run test:ci` | Run tests with coverage in CI mode       |

## 🏗️ Project Structure

```
todo/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── App.test.jsx          # Application tests
│   ├── main.jsx              # Application entry point
│   └── test-setup.js         # Test configuration
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # CI/CD pipeline configuration
├── dist/                     # Production build output
├── coverage/                 # Test coverage reports
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

## 🧪 Testing

The project includes comprehensive tests covering:

- ✅ Component rendering
- ✅ User interactions (add, edit, delete todos)
- ✅ State management
- ✅ Empty states
- ✅ Form handling

**Test Coverage: 91.42%**

```bash
# Run tests with coverage
npm run test:ci

# Run tests in watch mode (development)
npm run test
```

## 🚀 Permissions for docker-install

```bash
   chmod +x ddcker-install.sh
```

## Running docker-install

```bash
   ./docker-install.sh
```

## Running docker-compose and stopping docker compose

```bash
   docker-compose up -d
   docker-compose down
```

### EC2 Port Configuration

Open these ports in your EC2 Security Group:

| Port     | Protocol | Purpose                   |
| -------- | -------- | ------------------------- |
| **3000** | TCP      | Main application port     |
| **22**   | TCP      | SSH access                |
| **80**   | TCP      | HTTP (optional redirect)  |
| **443**  | TCP      | HTTPS (if SSL configured) |

### Deployment Process

The application uses **GitHub Actions** with a **self-hosted runner** for deployment:

1. **Automatic Triggers**:

   - Push to `main` or `master` branch
   - Pull requests to `main` or `master`

2. **CI Pipeline**:

   - Code checkout and Node.js setup
   - Dependency installation
   - ESLint code analysis
   - Comprehensive test suite
   - Production build with Vite
   - Deployment package creation

3. **CD Pipeline**:
   - Deploy to EC2 using self-hosted runner
   - Zero-downtime deployment
   - Health checks and monitoring
   - Automatic rollback on failure

### Setting Up EC2 Deployment

1. **Verify EC2 Setup**:

   ```bash
   # Run this on your EC2 instance
   chmod +x verify-ec2-setup.sh
   ./verify-ec2-setup.sh
   ```

2. **Install GitHub Self-Hosted Runner**:

   - Go to Repository → Settings → Actions → Runners
   - Click "New self-hosted runner"
   - Follow installation instructions on your EC2

3. **Deploy**:
   ```bash
   git push origin main
   ```

### Health Monitoring

Once deployed, monitor your application:

- **Application**: `http://your-ec2-ip:3000`
- **Health Check**: `http://your-ec2-ip:3000/api/health`

Health endpoint returns:

```json
{
  "status": "OK",
  "timestamp": "2025-01-24T09:24:09.000Z",
  "version": "1.0.0",
  "commit": "abc123..."
}
```

## 🔧 Configuration

### Environment Variables

| Variable           | Description     | Default   |
| ------------------ | --------------- | --------- |
| `PORT`             | Server port     | `3000`    |
| `VITE_APP_VERSION` | App version     | `1.0.0`   |
| `VITE_COMMIT_SHA`  | Git commit hash | `unknown` |

### Vite Configuration

The `vite.config.js` includes:

- React plugin configuration
- Vitest testing setup
- jsdom environment for tests
- Test setup file configuration

### ESLint Configuration

Strict linting rules including:

- React best practices
- React Hooks rules
- Modern JavaScript standards
- Unused variable detection
- Code formatting standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Run linting
7. Submit a pull request

### Development Guidelines

- Write tests for new features
- Follow existing code style
- Use meaningful commit messages
- Update documentation as needed
- Ensure CI pipeline passes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

**Development server won't start**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Tests failing**

```bash
# Clear test cache and run again
npm run test:ci -- --clearCache
npm run test:ci
```

**Deployment failing**

```bash
# Check EC2 runner status
sudo systemctl status actions.runner.*

# Check application logs
tail -f /home/$USER/vite-todo/app.log
```

**Port 3000 in use**

```bash
# Find and kill process using port 3000
sudo lsof -ti:3000
sudo kill -9 <PID>
```

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Review the troubleshooting section
3. Create a new issue with detailed information

---

**Built with ❤️ using Vite + React**

_Lightning fast development • Modern tooling • Production ready_
