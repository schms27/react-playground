import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import LoadingOverlay from "./LoadingOverlay";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <LoadingOverlay />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
