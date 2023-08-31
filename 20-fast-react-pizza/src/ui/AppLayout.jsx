import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import LoadingOverlay from "./LoadingOverlay";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <LoadingOverlay />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
