import { ProfileForm } from "../utility/add-book-form";

const AddBook = () => {
    return (
        <div className="m-4 p-4">
             <h3 className="text-2xl font-bold mb-4">Add New Book</h3>

             <ProfileForm></ProfileForm>
        </div>
    );
};

export default AddBook;