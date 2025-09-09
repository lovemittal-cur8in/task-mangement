# Task Management App

A modern, full-stack task management application built with Next.js 14, TypeScript, MongoDB, and TailwindCSS. Users can register, log in, and manage their personal tasks with features like search, filtering, and pagination.

## Features

### Authentication
- ✅ User registration with email and password
- ✅ Secure login with JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Session management with NextAuth.js
- ✅ Protected routes and user-specific data access

### Task Management (CRUD)
- ✅ Create new tasks with title and description
- ✅ View all tasks with status indicators
- ✅ Update task details and status
- ✅ Delete tasks
- ✅ Task status: Pending/Done with visual indicators
- ✅ Created and updated timestamps

### Search, Filter, and Pagination
- ✅ Search tasks by title or description
- ✅ Filter tasks by status (All, Pending, Done)
- ✅ Combined search and filter functionality
- ✅ Pagination with page navigation
- ✅ Real-time search and filter updates

### Frontend
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ TailwindCSS for modern, responsive design
- ✅ React Query for efficient data fetching
- ✅ Optimistic updates for better UX
- ✅ Loading and error states
- ✅ Mobile-responsive design

### Bonus Features
- ✅ React Query for data fetching and caching
- ✅ Optimistic updates for task actions
- ✅ Clean, modern UI with TailwindCSS
- ✅ TypeScript throughout the application
- ✅ Form validation with Zod and React Hook Form

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with JWT
- **Data Fetching**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   MONGODB_URI=mongodb://localhost:27017/task-management
   ```

   For production with MongoDB Atlas:
   ```env
   NEXTAUTH_URL=https://your-domain.com
   NEXTAUTH_SECRET=your-production-secret-key
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-management
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Database Setup

#### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The app will automatically create the database and collections

#### MongoDB Atlas (Recommended for Production)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in your `.env.local` file

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── register/route.ts
│   │   └── tasks/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── auth/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   ├── dashboard/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── auth.ts
│   └── mongodb.ts
├── models/
│   ├── Task.ts
│   └── User.ts
├── providers/
│   ├── query-provider.tsx
│   └── session-provider.tsx
└── types/
    └── global.d.ts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/[...nextauth]` - NextAuth.js endpoints

### Tasks
- `GET /api/tasks` - Get user's tasks (with search, filter, pagination)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get a specific task
- `PUT /api/tasks/[id]` - Update a task
- `DELETE /api/tasks/[id]` - Delete a task

## Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
3. **Deploy**
   - Vercel will automatically deploy on every push

### Environment Variables for Production
```env
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-production-secret
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-management
```

## Usage

1. **Register**: Create a new account with your email and password
2. **Sign In**: Access your account
3. **Dashboard**: View all your tasks
4. **Create Task**: Click "Add Task" to create a new task
5. **Edit Task**: Click the edit icon to modify a task
6. **Toggle Status**: Click the circle icon to mark tasks as done/pending
7. **Delete Task**: Click the trash icon to remove a task
8. **Search**: Use the search bar to find specific tasks
9. **Filter**: Use the dropdown to filter by status
10. **Navigate**: Use pagination to browse through multiple pages

## Features in Detail

### Search and Filter
- Search works across task titles and descriptions
- Filter by task status (All, Pending, Done)
- Search and filter work together seamlessly
- Real-time updates as you type

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Optimized for both desktop and mobile

### Performance
- React Query for efficient data fetching
- Optimistic updates for instant feedback
- Pagination to handle large task lists
- Cached queries for better performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This is a take-home assignment project demonstrating full-stack development skills with modern web technologies.