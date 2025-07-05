# 📚 Library Management System API


A minimal and modern library management frontend application built with **React**, **Redux Toolkit Query**, and **TypeScript**. This app allows users to view, borrow, update, and manage books seamlessly with backend API integration.




## 🏗️Features


- ✅ View all books with details
- ✅ Add new books
- ✅ Edit book information (title, author, copies, etc.)
- ✅ Delete book with confirmation
- ✅ Borrow book via modal form
- ✅ Quantity & due date validation for borrow
- ✅ Borrow summary using aggregation API
- ✅ Success/error toasts using React Toastify
- ✅ Fully responsive & minimal UI with DaisyUI + Tailwind CSS

## Tech Stack



| Technology        | Description                          |
|-------------------|--------------------------------------|
| React             | Frontend UI Framework                |
| TypeScript        | Type-safe JavaScript                 |
| Redux Toolkit     | State & API Management               |
| RTK Query         | Efficient data fetching              |
| React Hook Form   | Form handling and validation         |
| React Router DOM  | Page Routing                         |
| DaisyUI           | Tailwind-based UI Components         |
| React Toastify    | Toast Notification                   |
| Vercel            | Deployment                           |



Using `createApi` from Redux Toolkit Query for:

- `getBooks`
- `addBook`
- `deleteBook`
- `updateBook`
- `borrowBook`
- `getBorrowSummary`

---

## 📘 Pages & Functionalities

| Page             | Path                | Description                                   |
|------------------|---------------------|-----------------------------------------------|
| All Books        | `/`                 | Displays all available books with actions     |
| Edit Book        | `/editBook/:id`     | Updates book info via PATCH                   |
| Book Details     | `/books/:id`        | Shows single book details                     |
| Borrow Summary   | `/borrow-summary`   | Shows total borrowed quantity per book        |

---

## 🧪 Sample Borrow Modal

Uses DaisyUI modal for borrow:

```tsx
<BorrowModal
  book={selectedBook}
  isOpen={!!selectedBook}
  onClose={() => setSelectedBook(null)}
/>
```


🙋 Author
Sojib Sheikh
🌐 sojibsheikh.com