                Care.IO (Care.xyz)

Live Link:https://assignment012-kdhw.vercel.app/

📄 Short Project Description
Care.IO (Care.xyz) is a trusted web platform designed to provide reliable care services for children, the elderly, and individuals with special needs. It connects families with professional caregivers for services like babysitting and home-based nursing. The project’s core mission is to make finding and booking caregivers easy, secure, and accessible for everyone through a seamless digital experience.

📦 Setup & Installation Instructions
To set up and run Care.IO on your local machine, follow these steps:

Clone the Repository:https://github.com/Afrida-Islam/Assignment012

Install Dependencies: Make sure you have installed, then run:

Environment Variables: Create a .env.local file in the root directory and add your configuration keys:

Run the Development Server:

Now, open in your browser to see the application in action.

✅ List of Implemented Features
Responsive UI/UX: A fully mobile-first, responsive design built with Tailwind CSS.

7+ Landing Page Sections: Comprehensive homepage including Hero, Features, About, Stats, Pricing, Testimonial, and Contact.

Authentication (NextAuth.js): Secure login system using Credentials Provider with session management.

Persistent Sessions: Users remain logged in across page refreshes via JWT and Cookies.

Route Protection (Middleware): Unauthorized users are automatically redirected to the login page when trying to access private routes.

Dynamic Service Listing: Service data is fetched and displayed dynamically from an API/JSON source.

Smart Booking System: Real-time total cost calculation based on service duration.

Input Validation: Strict registration rules (NID validation and complex password requirements).

💡 Brief Explanation of Features
NextAuth Integration: We implemented NextAuth.js to handle secure authentication. The system uses a CredentialsProvider to verify users against hardcoded/mock data, and the session is stored in a secure cookie to manage user state globally.

Route Guards & Middleware: To ensure privacy, we used Next.js Middleware. This logic checks if a session token exists; if a user tries to access /my-bookings or /booking/:id without logging in, they are blocked and sent to the /login page.

Dynamic Data Fetching: Instead of static content, the service items are fetched from an external source using fetch APIs. This allows the platform to be scalable and always show updated caregiver information.

Automatic Price Calculation: On the booking page, we implemented a reactive state that calculates the Total Price = Days/Hours × Unit Price instantly, providing a transparent user experience.

Hierarchical Location Selection: To ensure accurate service delivery, we built a dependent dropdown system where users select their Division, District, and Area in a structured manner.