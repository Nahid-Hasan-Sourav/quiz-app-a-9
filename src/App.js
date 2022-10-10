
// import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./Layout/Main";

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,

    children:[
      {
        path:'/',
        loader: ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Topics></Topics>
       },
      {
      path:'topics',
      loader: ()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Topics></Topics>
     },
     {
      path:'/quiz/:id',
      loader: async ({params})=>{
        console.log("This is dynamic id ",params.id)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element:<Quiz></Quiz>

     },
     {
      path:'/statistics',
      element:<Statistics></Statistics>
     },
     {
      path:'/blog',
      element:<Blog></Blog>
     }
    ]
  
  },
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
