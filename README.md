# 🚗 RentalCar Frontend

This is the frontend part of a web application for **RentalCar**, a company specializing in car rentals. The app provides an interface to browse, filter, and book cars using a ready-made API.

## 📌 Technologies Used

- ⚛️ **React** + **Vite** — fast and modern frontend stack.
- 🗂️ **Redux Toolkit** — for global state management.
- 🔁 **React Router** — for handling routing.
- 📡 **Axios** — for API requests.
- 🎨 **(CSS Modules)** — for styling (choose one).
- 📦 API: [car-rental-api.goit.global](https://car-rental-api.goit.global/api-docs/)

---

## 🧭 Routes

- `/` — Home page (banner with a CTA).
- `/catalog` — Catalog page with filters, favorites, and pagination.
- `/catalog/:id` — Car detail page with booking form.

---

## 📄 Main Pages

### 🏠 Home Page

- Banner with a “View Catalog” button that navigates to the catalog.

### 🚘 Catalog Page

- List of available vehicles.
- Filtering by:
  - brand (single selection),
  - price (single selection),
  - mileage (range: "from" and "to").
- Favorites (stored in `localStorage`).
- "Load More" button — backend-driven pagination.
- "Read More" button — navigates to the car detail page.

### 📄 Car Detail Page

- Detailed car information.
- Photo or gallery.
- Booking form.
- Notification on successful form submission.

---

## 🧠 State Management

- `Redux` handles:

  - list of vehicles,
  - favorites,
  - active filters,
  - current pagination page.

- Previous search results are reset when applying new filters to ensure accuracy.

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/rentalcar-frontend.git
cd rentalcar-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
