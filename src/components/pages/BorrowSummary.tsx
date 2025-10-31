

import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";


const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <div className="m- p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold my-4">Borrow Summary</h2>

      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Book Title</th>
            <th className="border border-gray-300 px-4 py-2 text-left">ISBN</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: any) => (
            <tr key={item.bookId}>
              <td className="border border-gray-300 px-4 py-2">{item.book.title}</td>
              <td className="border border-gray-300 px-4 py-2">{item.book.isbn}</td>
              <td className="border border-gray-300 px-4 py-2">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
