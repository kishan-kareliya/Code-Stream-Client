import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EditorWorkspace from "./pages/EditorWorkspace";
import RoomPage from "./pages/RoomPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/room",
    element: <RoomPage />,
  },
  {
    path: "/editor/:roomId",
    element: <ProtectedRoute element={EditorWorkspace} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
