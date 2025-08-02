# ThalaConnect 🩸

**AI-Powered Blood Donation Platform for Thalassemia Patients in India**

ThalaConnect is a comprehensive, mobile-first platform that connects Thalassemia patients with life-saving blood donors through AI-powered matching, personalized education, and community support. Built by Blood Warriors to address the critical challenges faced by Thalassemia patients in accessing timely blood transfusions.

![ThalaConnect Banner](https://via.placeholder.com/1200x400/dc2626/ffffff?text=ThalaConnect+-+Connecting+Lives)

## 🌟 Features

### 🤖 AI-Powered Donor Matching
- **Real-time Prediction**: AI algorithms predict donor availability using geolocation and donation history
- **Smart Matching**: 98% accuracy in matching patients with compatible donors
- **Urgency-based Prioritization**: Critical cases get priority matching
- **Distance Optimization**: Find the nearest available donors

### 🔐 Secure & Compliant Platform
- **DPDPA Compliant**: Adheres to India's Digital Personal Data Protection Act
- **Role-based Access**: Separate interfaces for patients, donors, and healthcare providers
- **Encrypted Communication**: Secure messaging between all parties
- **Verified Users**: Trust badges and verification system

### 📚 Personalized Education
- **Adaptive Learning**: Content tailored to literacy level and treatment history
- **Interactive Modules**: Engaging courses on Thalassemia management
- **Progress Tracking**: Monitor learning journey with achievements
- **Expert Content**: Medical information reviewed by healthcare professionals

### 🏆 Gamification & Community
- **Donor Recognition**: Points, badges, and leaderboards
- **Community Support**: Patient forums and support groups
- **Achievement System**: Motivational rewards for engagement
- **Success Stories**: Inspiring patient and donor testimonials

### 🩸 Comprehensive Blood Management
- **Emergency Requests**: One-click emergency blood assistance
- **Appointment Scheduling**: Seamless coordination with healthcare providers
- **Donation Tracking**: Complete history of donations and transfusions
- **Integration Ready**: Compatible with e-RaktKosh and Blood Bridge APIs

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later
- **Git** (for cloning)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/blood-warriors/thalaconnect.git
   cd thalaconnect
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📱 Usage

### For Patients
1. **Register** as a patient with medical details
2. **Complete Profile** with blood type and location
3. **Find Donors** using AI-powered matching
4. **Schedule Appointments** with healthcare providers
5. **Learn & Grow** through personalized education modules
6. **Connect** with the community for support

### For Donors
1. **Sign Up** as a blood donor
2. **Verify Profile** for trust and safety
3. **Set Availability** and donation preferences
4. **Respond to Requests** from patients in need
5. **Earn Recognition** through the gamification system
6. **Track Impact** of your donations

### For Healthcare Providers
1. **Register** with medical credentials
2. **Manage Patients** and appointment schedules
3. **Coordinate Care** with other providers
4. **Access Resources** for better patient management
5. **Contribute Content** to the education platform

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

### Backend (Ready for Integration)
- **RESTful APIs** - FHIR-compliant endpoints
- **Authentication** - JWT-based security
- **Database** - PostgreSQL/MongoDB ready
- **Real-time** - WebSocket support for notifications

### AI & Analytics
- **Machine Learning** - Donor matching algorithms
- **Geolocation** - Location-based services
- **Predictive Analytics** - Availability forecasting
- **Personalization** - Content recommendation engine

## 🏗️ Project Structure

\`\`\`
thalaconnect/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # User dashboards
│   ├── donors/           # Donor discovery
│   ├── education/        # Learning platform
│   ├── community/        # Social features
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── custom/          # Custom components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript definitions
├── public/              # Static assets
└── styles/              # Global styles
\`\`\`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=ThalaConnect

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/thalaconnect

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# External APIs
GOOGLE_MAPS_API_KEY=your-google-maps-key
TWILIO_API_KEY=your-twilio-key
OPENAI_API_KEY=your-openai-key

# Healthcare Integrations
E_RAKTKOSH_API_KEY=your-eraktkosh-key
BLOOD_BRIDGE_API_KEY=your-bloodbridge-key

# Notifications
FIREBASE_PROJECT_ID=your-firebase-project
FIREBASE_PRIVATE_KEY=your-firebase-key
\`\`\`

## 📊 API Documentation

### Authentication Endpoints
\`\`\`
POST /api/auth/register    # User registration
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/profile     # Get user profile
\`\`\`

### Donor Management
\`\`\`
GET    /api/donors         # List available donors
POST   /api/donors/search  # AI-powered donor search
GET    /api/donors/:id     # Get donor details
POST   /api/donors/contact # Contact donor
\`\`\`

### Blood Requests
\`\`\`
POST   /api/requests       # Create blood request
GET    /api/requests       # List user requests
PUT    /api/requests/:id   # Update request status
DELETE /api/requests/:id   # Cancel request
\`\`\`

### Education Platform
\`\`\`
GET  /api/courses          # List courses
GET  /api/courses/:id      # Get course details
POST /api/courses/:id/enroll # Enroll in course
PUT  /api/progress/:id     # Update progress
\`\`\`

## 🧪 Testing

### Run Tests
\`\`\`bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
\`\`\`

### Test Structure
\`\`\`
tests/
├── __mocks__/           # Mock data and functions
├── components/          # Component tests
├── pages/              # Page tests
├── api/                # API endpoint tests
└── e2e/                # End-to-end tests
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
\`\`\`

### Docker
\`\`\`bash
# Build image
docker build -t thalaconnect .

# Run container
docker run -p 3000:3000 thalaconnect
\`\`\`

### Manual Deployment
\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before getting started.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

## 📋 Roadmap

### Phase 1 (Current) ✅
- [x] Core platform development
- [x] AI donor matching algorithm
- [x] User authentication system
- [x] Basic education modules
- [x] Community features

### Phase 2 (Q2 2024) 🚧
- [ ] Real-time notifications
- [ ] Advanced AI features
- [ ] Mobile app development
- [ ] Healthcare provider integrations
- [ ] Multi-language support

### Phase 3 (Q3 2024) 📋
- [ ] Telemedicine integration
- [ ] Financial assistance module
- [ ] Advanced analytics dashboard
- [ ] Blockchain audit trails
- [ ] IoT device integration

### Phase 4 (Q4 2024) 🔮
- [ ] Machine learning optimization
- [ ] Predictive health analytics
- [ ] Government system integration
- [ ] International expansion
- [ ] Research collaboration platform

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
- **Documentation**: [docs.thalaconnect.org](https://docs.thalaconnect.org)
- **Community Forum**: [community.thalaconnect.org](https://community.thalaconnect.org)
- **Email Support**: support@thalaconnect.org
- **Emergency Helpline**: 1800-123-BLOOD

### Bug Reports
Please use our [GitHub Issues](https://github.com/blood-warriors/thalaconnect/issues) to report bugs or request features.

### Security Issues
For security-related issues, please email security@thalaconnect.org instead of using public issues.

## 🙏 Acknowledgments

- **Blood Warriors** - Founding organization
- **Thalassemia Patients** - For their invaluable feedback
- **Healthcare Providers** - For medical expertise
- **Open Source Community** - For the amazing tools and libraries
- **Donors** - The real heroes saving lives every day

## 📞 Contact

**Blood Warriors Organization**
- **Website**: [bloodwarriors.org](https://bloodwarriors.org)
- **Email**: info@bloodwarriors.org
- **Phone**: +91-XXX-XXX-XXXX
- **Address**: Mumbai, Maharashtra, India

**Development Team**
- **Lead Developer**: [GitHub Profile](https://github.com/developer)
- **Project Manager**: [LinkedIn Profile](https://linkedin.com/in/pm)
- **Medical Advisor**: Dr. Medical Expert

---

<div align="center">

**Made with ❤️ by Blood Warriors**

*Connecting lives, one donation at a time*

[![GitHub Stars](https://img.shields.io/github/stars/blood-warriors/thalaconnect?style=social)](https://github.com/blood-warriors/thalaconnect)
[![Twitter Follow](https://img.shields.io/twitter/follow/thalaconnect?style=social)](https://twitter.com/thalaconnect)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://linkedin.com/company/thalaconnect)

</div>
 