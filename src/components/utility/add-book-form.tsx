"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAddBookMutation } from "@/redux/api/baseApi";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router"


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  author: z.string().min(2,{
    message: "Author name must be at least 2 characters.",
  }),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY"
  ]),
  isbn: z.string().length(13, {
    message: "ISBN must be exactly 13 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
    }),
  copies: z.number().min(1, {
  message: "Copies must be at least 1.",
}),

    available: z.boolean({
    message: "Available must be true or false.",
    }),
})

export function ProfileForm() {

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      description: "",
      copies: 1,
      available: true,
    },
  });
   const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    try {
    const payload = {
      title: values.title, 
      author: values.author,
      genre: values.genre,
      isbn: values.isbn,
      description: values.description,
      copies: values.copies,
      available: values.available,
    };

    const res = await addBook(payload).unwrap();
    console.log("Book added successfully:", res);
    toast.success("Book added successfully!");

    form.reset();
    navigate("/AllBooks"); 

  } catch (err) {
    console.error("Failed to add book", err);
    
    toast.error("Something went wrong! Change You isbn & try again later.");
  }
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Book Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem> 
          )}
        />


         {/** Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Genre */}
       <FormField
  control={form.control}
  name="genre"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Genre</FormLabel>
      <FormControl>
        <select {...field} className="w-full border px-2 py-1 rounded">
          <option value="">Select Genre</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTION">Non-fiction</option>
          <option value="SCIENCE">Science</option>
          <option value="HISTORY">History</option>
          <option value="BIOGRAPHY">Biography</option>
          <option value="FANTASY">Fantasy</option>
        </select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


        {/** ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="ISBN number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Short description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Copies */}
        <FormField
  control={form.control}
  name="copies"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Copies</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Number of copies"
          value={field.value}
          onChange={(e) => field.onChange(Number(e.target.value))}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


        <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available</FormLabel>
              <FormControl>
                <input className="mr-4" type="checkbox" checked={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       

        
       <Button type="submit" disabled={isLoading}>
  {isLoading ? "Submitting..." : "Submit"}
</Button>

      </form>
    </Form>
  )
}