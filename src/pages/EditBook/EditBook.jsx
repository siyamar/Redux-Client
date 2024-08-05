import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../../features/books/booksSlice";
import { updateLatestBooks } from "../../features/latestBooks/latestBooksSlice";

export default function EditBook() {
  const location = useLocation();
  const { id, title, author } = location.state;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    //now send the menu item data to the server with the image url
    const book = {
      id: id,
      title: data.title,
      author: data.author,
    };
    // console.log(book)
    // dispatch(updateBook(book));
    dispatch(updateLatestBooks(book));
    //
    reset();
    navigate("/latestBooks");
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4 mb-6">Edit Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-1/2 my-6 mx-auto">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            defaultValue={title}
            type="text"
            placeholder="title"
            {...register("title")}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-1/2 my-6 mx-auto">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            defaultValue={author}
            type="text"
            placeholder="author name"
            {...register("author")}
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary form-control w-1/2 my-6 mx-auto">
          Update Book
        </button>
      </form>
    </div>
  );
}
