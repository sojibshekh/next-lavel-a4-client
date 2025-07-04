

import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";


const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Borrow Summary</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>ISBN</th>
            <th>Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: any) => (
            <tr key={item.bookId}>
              <td>{item.book.title}</td>
              <td>{item.book.isbn}</td>
              <td>{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
