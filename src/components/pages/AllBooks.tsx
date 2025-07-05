import { useGetBooksQuery , useDeleteBookMutation } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button"

import { toast } from "react-toastify";

import { useNavigate } from "react-router";

import { useState } from "react";
import BorrowModal from "../utility/BorrowModal";


const AllBooks = () => {

    const {data: books, isLoading, isError}= useGetBooksQuery(undefined);

    const [deleteBook] = useDeleteBookMutation();
    
    const [selectedBook, setSelectedBook] = useState<any>(null); // 
  
    const navigate = useNavigate();


    const handleDelete = async (id: string) => {
         if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await deleteBook(id).unwrap();
      toast.success("✅ Book deleted successfully!");

     

     
    } catch (error) {
      toast.error("❌ not delete");
      console.error(error);
    }
  };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    
    if (isError) {
        return <div>Error loading books.</div>;
    }
  
    return (
        <div className="m-4 p-4">
            <h1  className="text-2xl font-bold mb-4">show all Books</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>ISBN</th>
        <th>Copies</th>
        <th>Availability</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

       { !isLoading && books?.data.map((book: any) => (
          
                    

                    <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.isbn}</td>
                    <td>{book.copies}</td>
                    <td>{book.available ? "Available" : "Not Available"}</td>
                    <td className="gap-4 flex">
                    <Button variant="outline"  onClick={() => handleDelete(book._id)}>Delete</Button>
                    <Button variant="outline" onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</Button>
                    <Button variant="outline" onClick={() => navigate(`/books/${book._id}`)}>View Details</Button>

                    <button className="btn btn-sm btn-primary" onClick={() => setSelectedBook(book)}>
                  Borrow
                </button>
                    </td>
                </tr>
                     
                 ))} 
 
      
   
     
    </tbody>
  </table>
</div>

          {selectedBook && (
        <BorrowModal
          book={selectedBook}
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}   

           
        </div>
    );
};

export default AllBooks;