
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useGetBooksQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router";

const EditBook = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [updateBook] = useUpdateBookMutation();

  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
      available: true,
    },
  });

  

  
  useEffect(() => {
    if (data?.data && id) {
      const book = data.data.find((b: any) => b._id === id);
      if (book) {
        form.reset(book);
      }
    }
  }, [data, id]);


  

// const available = form.watch("available");

const copies = form.watch("copies");

useEffect(() => {
  if (copies === 0) {
    form.setValue("available", false); // auto uncheck
  }
  // copies > 0 -> user can manually check/uncheck
}, [copies, form]);




 
  const onSubmit = async (values: any) => {
    try {
      await updateBook({ id, updatedData: values }).unwrap();
      toast.success("✅ Book updated successfully!");
      navigate("/books"); 
    } catch (error: any) {
      toast.error("❌ Book update failed: " + (error?.data?.message || "Unknown error"));
    }
  };

  if (isLoading) return <p>⏳ Loading book...</p>;

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 m-4">
      <h2 className="text-xl font-bold mb-4">✏️ Edit Book</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input {...form.register("title")} placeholder="Title" className="w-full border p-2" />
        <input {...form.register("author")} placeholder="Author" className="w-full border p-2" />
        <select {...form.register("genre")} className="w-full border p-2">
          <option value="">Select Genre</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTION">Non-fiction</option>
          <option value="SCIENCE">Science</option>
          <option value="HISTORY">History</option>
          <option value="BIOGRAPHY">Biography</option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <input {...form.register("isbn")} placeholder="ISBN" className="w-full border p-2" />
        <input {...form.register("description")} placeholder="Description" className="w-full border p-2" />
        <input
          type="number"
          {...form.register("copies")}
          placeholder="Copies"
          className="w-full border p-2"
        />
        <label className="flex items-center gap-2">
          <input type="checkbox" {...form.register("available")} />
          Available
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
