import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Bolg from './components/Blog/Bolg';
import Coursedetails from './components/Coursedetails/Coursedetails';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>

        },
        {
          path:'/topics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>

        },
        {
          path:'/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Bolg></Bolg>
        },
        {
          path:'/course/:courseId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element:<Coursedetails></Coursedetails>
        },
        {
          path:'/topics/course/:courseId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element:<Coursedetails></Coursedetails>
        }
      ]
    },
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>   
    </div>
  );
}

export default App;

