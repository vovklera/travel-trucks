# — 🚐 TravelTrucks —

A frontend web application for searching and renting campers, allowing users to easily browse and choose from available offers.

---

## 🔗 Links

- **Live website:** [Deployed applicaton](https://travel-trucks-kohl.vercel.app/)
- **Design:** [Figma design](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=48730-474&p=f&t=P7U1nGPiaVm00rxZ-0)
- **API documentation:** [Swagger documentation](https://campers-api.goit.study/docs#/)

---

## 📖 About the project

**The application consists of three pages:**

- Home (`/`) — the home page with a main banner and a call to explore available campers.
- Catalog (`/catalog`) — the catalog page displaying available campers. Users can filter campers by different parameters and load more listings.
- Camper details (`/catalog/[camperId]`) — the camper details page with detailed information, a photo gallery, user reviews, and a booking form.

---

## ✨ Main functionality

- Camper catalog with backend data
- Server-side filtering by multiple parameters
- Infinite query pagination with Load More
- Filters saved in URL and preserved after page reload
- Camper details with full information
- Interactive image gallery with Swiper
- Booking form with validation and backend integration
- Success notification from the backend response

---

## 🛠 Technologies

### Front-end

- Next.js
- TypeScript
- React
- TanStack Query
- Axios
- Formik
- Yup
- CSS Modules
- React Icons
- Swiper
- React Hot Toast

### Development and deployment

- Git
- GitHub
- VS Code
- Figma
- Postman
- Swagger UI
- ESLint
- Vercel

---

## 🚀 Running the project

**— Requirements —**

Before starting, install:

- Node.js 20 or newer
- Git

### 1. Clone the repository

```
git clone https://github.com/vovklera/travel-trucks.git
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

Open http://localhost:3000 in your browser to view the application.
