import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content />,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    },
                    {
                        path: 'author',
                        element: <Author />,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />,
            },

        ]
    },
])