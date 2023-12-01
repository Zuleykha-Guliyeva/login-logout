import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import useGlobalStyles from "./assets/styles/style";
import router from "../src/router/router";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        style={{
          minHeight: "auto",
          maxHeight: "80vh",
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
