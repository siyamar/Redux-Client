import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "../../features/books/booksSlice";
import { Link } from "react-router-dom";

export default function ShowBooks() {
  const books = useSelector((state)=> state.booksReducer.books)
  const dispatch = useDispatch();

  const handleDeleteBook = (id)=>{
    dispatch(deleteBook(id))
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4 mb-8">List of Books</h1>
      <div className="overflow-x-auto w-1/2 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        books && 
        books.map((book)=> {
          const {id, title, author} = book
          return (
          <tr key={id}>
        <th>{id}</th>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <Link to={'/editBook'} state={{id, title, author}}>
          <button className="btn btn-info mr-1">Edit</button>
          </Link>
          <button className="btn btn-warning" onClick={()=>{handleDeleteBook(book.id)}}>Delete</button>
        </td>
      </tr>
          )
        })
      }
      
    </tbody>
  </table>
</div>
    </div>
  )
}
