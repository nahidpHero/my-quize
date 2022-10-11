import React from 'react';
import './Blogpage.css'

const Bolgpage = () => {
    return (
        <div className='blog-component-style'>
            <div  className='border-2 m-3 p-4'>
                <h1 className='text-4xl font-semibold'># What is the purpose of react router?</h1>
                <p className='text-2xl'>It is used to define and render component based on the specified path. It will accept components and render to define what should be rendered.
                <br />
                React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                <br />
                By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                </p>
            </div>
            <div className='border-2 m-4 p-4'>
                <h1 className='text-4xl font-semibold'># How does context API work</h1>
                <p className='text-2xl'>React context API, In this article you will explore what is Context API and how to use it in your React project. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                <br />
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                <br />
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>
            </div>
            <div className='border-2 m-4 p-4'>
                <h1 className='text-4xl font-semibold'># What is useRef</h1>
                <p className='text-2xl'>
                The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook:
                <br />
                A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.
                Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).
                Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.
                


                </p>
            </div>

            
        </div>
    );
};

export default Bolgpage;