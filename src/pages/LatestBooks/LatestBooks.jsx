import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteLatestBook, fetchLatestBooks} from "../../features/latestBooks//latestBooksSlice"

export default function LatestBooks() {
    const latestBooks = useSelector((state)=> state.latestBooks.latestBooks)
    const dispatch = useDispatch()
    console.log(latestBooks)

    useEffect(()=>{
      dispatch(fetchLatestBooks())
    },[dispatch])

    const handleDeleteBook = (id)=>{
      dispatch(deleteLatestBook(id))
    }
    return (
      <div>
        <h1 className="font-bold text-2xl text-center mt-4 mb-8">List of Books</h1>
        <div className="overflow-x-auto w-1/2 mx-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          latestBooks && 
          latestBooks.map((book)=> {
            const {id, title, author} = book
            return (
            <tr key={id}>
          <td>{title}</td>
          <td>{author}</td>
          <td>
            <Link to={'/editBook'} state={{id, title, author}}>
            <button className="btn btn-info mr-1">Edit</button>
            </Link>
            <button className="btn btn-warning" onClick={()=>{handleDeleteBook(book.id)}}>Delete</button>
            {/* <button className="btn btn-warning">Delete</button> */}
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
