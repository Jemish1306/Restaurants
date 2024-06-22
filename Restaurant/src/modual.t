restaurant-dashboard/
├── backend/
│   ├── DB/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   ├── userController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── userRoutes.js
│   ├── utils/
│   │   ├── emailSender.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── restobg.jpg
│   │   │   │   ├── logo.png
│   │   ├── components/
│   │   │   ├── Admin/
│   │   │   │   ├── Dashboard.js
│   │   │   │   ├── OrderList.js
│   │   │   │   ├── OrderDetails.js
│   │   │   │   ├── UserManagement.js
│   │   │   ├── Auth/
│   │   │   │   ├── Login.js
│   │   │   │   ├── Registration.js
│   │   │   │   ├── ForgotPassword.js
│   │   │   │   ├── ForgotPasswordAndEnterOTP.js
│   │   │   ├── Customer/
│   │   │   │   ├── Menu.js
│   │   │   │   ├── ItemDetails.js
│   │   │   │   ├── Cart.js
│   │   │   │   ├── OrderSummary.js
│   │   │   ├── Kitchen/
│   │   │   │   ├── OrderManagement.js
│   │   │   ├── Shared/
│   │   │   │   ├── Header.js
│   │   │   │   ├── Footer.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   ├── OrderContext.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useOrder.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AdminPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegistrationPage.js
│   │   │   ├── ForgotPasswordPage.js
│   │   │   ├── MenuPage.js
│   │   │   ├── ItemDetailsPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── OrderSummaryPage.js
│   │   │   ├── OrderManagementPage.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── orderService.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── index.css
│   ├── .env
│   ├── package.json
│
├── README.md
├── .gitignore
└── package.json






Backend Details
config/

db.js: Database connection configuration.
controllers/

authController.js: Handles authentication logic.
orderController.js: Manages order-related operations.
userController.js: Manages user-related operations.
middlewares/

authMiddleware.js: Middleware for authentication.
errorMiddleware.js: Error handling middleware.
models/

Order.js: Order schema and model.
User.js: User schema and model.
routes/

authRoutes.js: Routes for authentication.
orderRoutes.js: Routes for order operations.
userRoutes.js: Routes for user operations.
utils/

emailSender.js: Utility function to send emails.
server.js: Main server file.

.env: Environment variables.

package.json: Backend dependencies.

Frontend Details
public/

index.html: Main HTML file.
src/

assets/

images/: Images used in the application.
restobg.jpg: Background image.
logo.png: Logo image.
components/

Admin/

Dashboard.js: Admin dashboard.
OrderList.js: List of orders.
OrderDetails.js: Detailed view of an order.
UserManagement.js: User management panel.
Auth/

Login.js: Login component.
Registration.js: Registration component.
ForgotPassword.js: Forgot password component.
ForgotPasswordAndEnterOTP.js: Component for entering OTP.
Customer/

Menu.js: Menu listing.
ItemDetails.js: Detailed view of a menu item.
Cart.js: Shopping cart.
OrderSummary.js: Order summary.
Kitchen/

OrderManagement.js: Order management for kitchen staff.
Shared/

Header.js: Common header component.
Footer.js: Common footer component.
context/

AuthContext.js: Context for authentication state.
OrderContext.js: Context for order state.
hooks/

useAuth.js: Custom hook for authentication.
useOrder.js: Custom hook for order management.
pages/

HomePage.js: Home page.
AdminPage.js: Admin dashboard page.
LoginPage.js: Login page.
RegistrationPage.js: Registration page.
ForgotPasswordPage.js: Forgot password page.
MenuPage.js: Menu page.
ItemDetailsPage.js: Menu item details page.
CartPage.js: Shopping cart page.
OrderSummaryPage.js: Order summary page.
OrderManagementPage.js: Order management page for kitchen.
services/

authService.js: Authentication service.
orderService.js: Order service.
utils/

api.js: API utility functions.
App.js: Main app component.

index.js: Entry point of the React application.

App.css: Global CSS for the app.

index.css: Global CSS.

.env: Environment variables.

package.json: Frontend dependencies.

Root Files
README.md: Project documentation.
.gitignore: Git ignore file.
package.json: Project metadata and dependencies.