import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Bolg from './components/Blog/Bolg';

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
          path:'/Topics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>

        },
        {
          path:'/Statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/Blog',
          element:<Bolg></Bolg>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>   
    </div>
  );
}

export default App;

