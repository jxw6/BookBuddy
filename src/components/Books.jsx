import { useEffect, useState } from "react";
import { getBooks } from "../API";

export default function Books({ token, navigate }) {
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [filter, setFilter] = useState("");

  function filterUpdate(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  useEffect(() => {
    getBooks(setBookList);
  }, []);

  return (
    <>
      <div>
        Search:
        <input className="bookSearch" onChange={filterUpdate} type="search" />
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Book List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {console.log(bookList)}
          {bookList
            .filter((book) =>
              book.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((book) => {
              return (
                <tr
                  onClick={() => {
                    setSelectedBook(book.id);
                    navigate(`/books/${book.id}`);
                  }}
                >
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
