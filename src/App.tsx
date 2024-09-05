import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <>
      <div className="mb-[90px]">
        {" "}
        <Header />
      </div>

      <AppRoutes />
      <Footer />
      <ToastContainer />
    </>
  );
}
