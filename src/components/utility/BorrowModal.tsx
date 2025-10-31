import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const BorrowModal = ({ book, isOpen, onClose }: any) => {
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();


    const today = new Date().toISOString().split("T")[0];


  const onSubmit = async (data: any) => {
    const quantity = parseInt(data.quantity);
    if (quantity > book.copies) {
      toast.error("❌ Quantity exceeds available copies");
      return;
    }

    const borrowData = {
      book: book._id,
      quantity,
      dueDate: data.dueDate,
    };
    console.log("Borrow Data:", borrowData);

    try {
      await borrowBook(borrowData).unwrap();
      toast.success("✅ Book borrowed successfully");
      reset();
      onClose(); // modal close
      navigate("/borrow-summary"); 
    } catch (error) {
      toast.error("❌ Failed to borrow book");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Borrow: {book.title}</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              className="input input-bordered w-full"
              min={1}
              max={book.copies}
            />
          </div>

          <div>
            <label className="block">Due Date</label>
            <input
              type="date"
              {...register("dueDate", { required: true })}
              className="input input-bordered w-full"  min={today} 
            />
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Borrowing..." : "Confirm Borrow"}
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default BorrowModal;
