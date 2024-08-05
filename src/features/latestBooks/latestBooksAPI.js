import axios from "axios";

export const getBooks = async()=>{
    const response = await fetch('http://localhost:5000/books');
    return response.json();
}

export const createBooks = async(latestBook)=>{
    const response = await axios.post('http://localhost:5000/books', latestBook);
    return response.json();
}

export const updateLatestBook = async (updatedLatestBook) => {
    const response = await axios.put(`http://localhost:5000/books/${updatedLatestBook.id}`, updatedLatestBook);
    return response.json();
  };

export const deletLatestBook = async (id) => {
    const response = await axios.delete(`http://localhost:5000/books/${id}`);
    return response.status === 200; // Assuming success on 200 status code
  };

// export const createPost = async (post) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(post),
  
//     });
//     return response.json();
//   };