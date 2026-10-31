MR WONGTON — Restaurant Ordering & Management System

1. Project Overview
   MR WONGTON is a full-stack restaurant web application designed to provide customers with a convenient online ordering experience while allowing restaurant staff and administrators to manage daily restaurant operations.
   The system will include a customer-facing website and an internal restaurant management dashboard.

---

2. Project Objectives
   • Build a functional full-stack restaurant web application.
   • Provide customers with an online menu and ordering experience.
   • Allow restaurant staff to manage incoming orders.
   • Allow administrators to manage products, categories, and inventory.
   • Practice building and deploying a production-style application.
   • Gain practical experience with modern full-stack web development.

---

3. Technology Stack
Core Stack
•	Frontend / Full-Stack Framework: Next.js (App Router)
•	Programming Language: TypeScript
•	Database: PostgreSQL
Additional Libraries / Tools
Database & Backend
•	ORM: Drizzle ORM
•	Database Migration Tool: Drizzle Kit
•	Authentication: Supabase Auth
•	Real-time Communication: Supabase Realtime
Frontend & UI
•	UI Component Library: Mantine UI
•	Styling Solution: CSS Modules
•	Form Handling: React Hook Form
•	Validation: Zod
•	State Management: Zustand
•	Data Fetching / Server State: TanStack Query
File & Media Management
•	File / Image Storage: Supabase Storage / Cloudinary
Deployment & Infrastructure
•	Application Hosting: Vercel
•	Database Hosting: Supabase
•	Version Control: Git
•	Code Repository: GitHub
Testing & Code Quality
•	Unit Testing: Vitest
•	Component Testing: React Testing Library
•	End-to-End Testing: Playwright
•	Linting: ESLint
•	Code Formatting: Prettier
________________________________________


---

4. Target Users
   Customers
   Customers who want to browse the menu and place restaurant orders.
   Restaurant Staff
   Employees responsible for receiving and processing customer orders.
   Kitchen Staff
   Employees responsible for preparing and updating food orders.
   Administrators
   Users responsible for managing restaurant products, inventory, sales, and system settings.

---

5. System Scope
   Customer Website
   The customer-facing website will include:
   • Home page
   • Restaurant information
   • Menu browsing
   • Product details
   • Shopping cart
   • Checkout
   • Order confirmation
   • Order tracking
   • Customer account
   Restaurant Management System
   The internal management system will include:
   • Admin dashboard
   • Order management
   • Product management
   • Category management
   • Inventory management
   • Sales overview
   • Staff-related functionality
   • System settings

---

6. Initial Functional Requirements
   Customer
   • Customers can browse available menu items.
   • Customers can view product details.
   • Customers can add products to a cart.
   • Customers can update cart quantities.
   • Customers can proceed to checkout.
   • Customers can place an order.
   • Customers can view their order status.
   Staff
   • Staff can view incoming orders.
   • Staff can update order statuses.
   • Staff can view order details.
   • Staff can mark orders as preparing, ready, or completed.
   Administrator
   • Administrators can create products.
   • Administrators can update products.
   • Administrators can delete or disable products.
   • Administrators can manage categories.
   • Administrators can manage inventory.
   • Administrators can view sales-related information.

---

7. Non-Functional Requirements
   • Responsive design for desktop, tablet, and mobile.
   • Secure authentication and authorization.
   • Proper input validation.
   • Reliable database transactions.
   • Maintainable and organized codebase.
   • Reasonable application performance.
   • Error handling and user feedback.
   • Production deployment capability.

---

8. Initial System Flow
   Customer Ordering Flow
   Home
   ↓
   Browse Menu
   ↓
   Select Product
   ↓
   Add to Cart
   ↓
   Checkout
   ↓
   Place Order
   ↓
   Order Confirmation
   ↓
   Track Order
   Restaurant Order Flow
   Customer Places Order
   ↓
   Order Stored in PostgreSQL
   ↓
   Staff Receives Order
   ↓
   Order Accepted
   ↓
   Preparing
   ↓
   Ready
   ↓
   Completed

---

9. Project Development Approach
   The project will be developed incrementally.
   Development will begin with the core system structure and essential functionality before adding advanced features.
   General Development Order
1. Project setup
1. Basic frontend pages
1. Database design
1. Database connection
1. Authentication
1. Product and menu management
1. Customer ordering
1. Admin order management
1. Inventory management
1. Order tracking
1. Testing
1. Deployment
1. UI improvements and additional features

---

10. Future Features
    The following features may be added later:
    • Online payment integration
    • Delivery management
    • Real-time order tracking
    • Customer notifications
    • Discount and promo codes
    • Loyalty system
    • Multi-branch support
    • Advanced sales reports
    • Receipt printing
    • Staff scheduling
    • Advanced inventory tracking

---

11. Project Success Criteria
    The initial version will be considered functional when:
    • Customers can browse the menu.
    • Customers can successfully place orders.
    • Orders are stored correctly in PostgreSQL.
    • Staff can view and manage orders.
    • Administrators can manage menu products.
    • The application can be deployed and accessed online.
    • Core workflows function correctly from frontend to backend.
