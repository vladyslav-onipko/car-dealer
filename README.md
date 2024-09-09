## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## This application allows users to browse and filter cars by selecting a model and year, providing an intuitive interface to explore a range of vehicles. The primary features include:

### Key Features:

1. Car Filtering by Model and Year:

- Users can select a car model and year from dropdown menus.
- The app dynamically filters the list of cars based on the selected model and year.
- The filtered results are displayed in a list.

2. Dynamic Routing:

- Car list page is dynamically generated based on the selected model and year using Next.js's dynamic routes (result/[makeId]/[year]).

3. Catch-All Route:

- The app utilizes Next.js's catch-all routing ([[...filter]]) to allow for flexible filtering paths, accommodating various combinations of filter parameters.

4. User-Friendly Interface:

- Responsive design with mobile and desktop support.
- Loading spinners for a better user experience while fetching data.
- Accessible dropdowns or selection components to filter cars easily.
