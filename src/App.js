import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss"

//func and component for routing(./login  && ./register)
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouterProvider,// calle router provider - виклик цього постачальника маршрутизатора 
} from "react-router-dom";



function App() {
  const currentUser = true; //need set false

  //My Layout(Maket)
  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  //ProtectedRoute - when user does not login on social-media, than user can not return on page home. If someuser want to go to the home page, this is mathod throw on ./Login page
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  //marszrutyzator przegląndarki(Routing browser)
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  
  return (
    <div>
      <RouterProvider router={router} /> {/*а всередені тут ми передаємо наш маршрутизатор */} 
    </div>
  );
}

export default App;
