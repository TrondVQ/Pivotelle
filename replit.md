# Mona Health App

## Overview

Mona is a React-based health and wellness application that provides personalized insights from health data to help optimize user wellness journeys. The app focuses on health metrics like sleep, readiness, and activity while providing nutritional guidance and progress tracking.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Single-page application with component-based navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Database & Storage
- **ORM**: Drizzle ORM with PostgreSQL
- **Database**: PostgreSQL 16 (via Neon serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Storage Interface**: Abstracted storage layer with memory fallback

## Key Components

### Frontend Components
1. **MonaApp**: Main application component with phone frame mockup
2. **Core Health Screens**:
   - **DashboardScreen**: Main overview with health metrics and device status
   - **ProgressScreen**: Enhanced tracking with sleep charts, HRV, and activity data
   - **NutritionScreen**: Meal planning and nutritional guidance
   - **InsightScreen**: Personalized health recommendations
3. **New Medical Features**:
   - **UserProfileScreen**: Personal information, health goals, and connected devices
   - **MedicalSummaryScreen**: Lab results, hormone panels, and medical records
   - **SymptomsScreen**: Self-reported symptom tracking with trends
   - **OnboardingScreen**: Initial setup for new users
4. **UI Library**: Complete shadcn/ui component set including:
   - Form components (Button, Input, Select, etc.)
   - Layout components (Card, Dialog, Sheet, etc.)
   - Navigation components (Tabs, Navigation Menu, etc.)
   - Data display components (Table, Avatar, Badge, etc.)

### Backend Components
1. **Express Server**: HTTP server with middleware for logging and error handling
2. **Route Registration**: Modular route system with API prefix
3. **Storage Layer**: Interface-based storage with memory and database implementations
4. **Vite Integration**: Development-only Vite middleware for hot reloading

### Database Schema
- **Users Table**: User authentication with extended profile information (age, height, weight, gender)
- **Medical Summaries Table**: Lab results, blood work, and medical records from healthcare providers
- **Symptoms Table**: Self-reported symptom tracking with severity ratings and notes
- **Onboarding Support**: User profile completion tracking for new user experience

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with `/api` prefix
3. **Storage Interface**: Abstracted CRUD operations through storage layer
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses with error handling and logging

## External Dependencies

### Core Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **UI Framework**: @radix-ui components, tailwindcss, class-variance-authority
- **Backend**: express, drizzle-orm, @neondatabase/serverless
- **Development**: vite, tsx, esbuild, typescript

### Development Tools
- **TypeScript**: Full type safety across client and server
- **ESLint/Prettier**: Code quality and formatting (implied)
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Port**: 5000 with Vite HMR
- **Database**: PostgreSQL via environment variable

### Production Build
- **Client Build**: Vite builds optimized React bundle to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Start Command**: `npm run start`

### Replit Deployment
- **Platform**: Autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80
- **Environment**: Node.js 20, PostgreSQL 16 modules

## Changelog

```
Changelog:
- January 2, 2025: Added comprehensive medical features including:
  * User profile management with personal health data
  * Medical summary input for lab results and blood work from GP
  * Self-reported symptoms tracking with severity ratings
  * Onboarding process for new user setup
  * Enhanced progress tracking with Oura Ring and Apple Watch integration
  * Extended database schema with medical summaries and symptoms tables
- June 27, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```