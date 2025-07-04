import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";


const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(bookId);

  if (isLoading) return <div>লোড হচ্ছে...</div>;
  if (isError || !data?.book) return <div>বই লোড করতে সমস্যা হয়েছে।</div>;

  const book = data.book;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow my-6">
      <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Copies:</strong> {book.copies}</p>
      <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
    </div>
  );
};

export default BookDetails;
