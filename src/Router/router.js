import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductsDetailsPage from "../Pages/ProductsDetailsPage";
import SellerProfilePage from "../Pages/SellerProfilePage";
import CategoryPage from "../Pages/CategoryPage";
import AllRecipeCategoryPage from "../Pages/AllRecipeCategoryPage";
import SingleRecipeCategoryAllFoodPage from "../Pages/SingleRecipeCategoryAllFoodPage";
import SingleRecipeFoodPage from "../Pages/SingleRecipeFoodPage";
import FaqPage from "../Pages/FaqPage";
import CountryCategoryPage from "../Pages/CountryCategoryPage";
import CustomerRegistrationPage from "../Pages/CustomerRegistrationPage";
import CreateFood from "../Components/ChildComponents/CreateFood";
import FoodsDairyPage from "../Pages/FoodsDairyPage";
import CheckOutPage from "../Pages/CheckOutPage";
import CustomerLoginPage from "../Pages/CustomerLoginPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import OTPPage from "../Pages/OTPPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FoodGallery from "../Components/ChildComponents/FoodGallery";
import UpdateSellerProfile from "../Pages/UpdateSellerProfile";
import PaymentSuccess from "../Components/ChildComponents/PaymentSuccess";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProductsDetails/:id",
    element: <ProductsDetailsPage />,
  },
  {
    path: "/SellerProfile/:id",
    element: <SellerProfilePage />,
    children: [
      {
        path: "/SellerProfile/:id",
        element: <FoodGallery />,
      },
    ],
  },
  {
    path: "/Category/:id",
    element: <CategoryPage />,
  },
  {
    path: "/AllRecipeCategory",
    element: <AllRecipeCategoryPage />,
  },
  {
    path: "/SingleRecipeCategoryAllFood/:id",
    element: <SingleRecipeCategoryAllFoodPage />,
  },
  {
    path: "/SingleRecipeFood/:id",
    element: <SingleRecipeFoodPage />,
  },
  {
    path: "/CustomerRegistration",
    element: <CustomerRegistrationPage />,
  },
  {
    path: "/Faq",
    element: <FaqPage />,
  },
  {
    path: "/CountryCategory",
    element: <CountryCategoryPage />,
  },
  {
    path: "/createfood",
    element: <CreateFood />,
  },
  {
    path: "/FoodsDairyPage/",
    element: <FoodsDairyPage />,
  },
  {
    path: "/CheckOut",
    element: (
      <PrivateRoute>
        <CheckOutPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/CustomerLogin",
    element: <CustomerLoginPage />,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/OTP",
    element: <OTPPage />,
  },
  {
    path: "/Reset-Password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/food",
    element: <FoodGallery />,
  },
  {
    path: "/updateProfile",
    element: <UpdateSellerProfile />,
  },
  {
    path:"/payment/success",
    element:<PaymentSuccess/>
  }
]);
