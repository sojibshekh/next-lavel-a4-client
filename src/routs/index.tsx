
import App from "@/App";
import HomePage from "@/components/HomePage/HomePage";
import AddBook from "@/components/pages/AddBook";
import AllBooks from "@/components/pages/AllBooks";
import BookDetails from "@/components/pages/BookDetails";
import BorrowSummary from "@/components/pages/BorrowSummary";
import EditBook from "@/components/pages/EditBook";


import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[

            {
                index: true,
                Component: HomePage,
            },
             {
                path: "/books",
                Component: AllBooks,
            },
             {
                path: "/books/:bookId",
                Component: BookDetails,

            },
            {
                path: "/create-book",
                Component: AddBook,

            },
            {
                path: "/edit-book/:id",
                Component: EditBook,

            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary,

            },
            
        ]
    }
])

export default router