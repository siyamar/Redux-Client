import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {addBook } from "../../features/books/booksSlice"
import { useNavigate } from "react-router-dom";
import { createLatestBooks } from "../../features/latestBooks/latestBooksSlice";

export default function AddBooks() {

  const numberOfBooks = useSelector((state)=> state.booksReducer.books.length)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
      //now send the menu item data to the server with the image url
      const book = {
        id: numberOfBooks+1,
        title: data.title,
        author: data.author,
        
      };
      // console.log(book)
      dispatch(addBook(book))
      dispatch(createLatestBooks(book))
      
      //
      reset()
      navigate('/latestBooks')
    
  };

  return (
    <div>
     <h1 className="font-bold text-2xl text-center mt-4 mb-6">Add Book</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-1/2 my-6 mx-auto">
          <label className="label">
            <span className="label-text">Title*</span>
          </label>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-1/2 my-6 mx-auto">
          <label className="label">
            <span className="label-text">Author*</span>
          </label>
          <input
            type="text"
            placeholder="author name"
            {...register("author", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn form-control w-1/2 my-6 mx-auto">
         Add Book
        </button>
      </form>
    </div>
  )
}
