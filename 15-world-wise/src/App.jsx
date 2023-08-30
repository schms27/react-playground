import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />

              <Route path="login" element={<Login />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route index element={<Homepage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
