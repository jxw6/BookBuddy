import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook, checkoutBook } from "../API";

export default function SingleBook({ token, navigate }) {
  const [book, setBook] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getBook(`${id}`, setBook);
    console.log(book);
  }, []);

  function checkOut(e) {
    console.log("Checking Out");
    e.preventDefault();

    const checkmeOut = {
      token: token,
      id: id,
      status: false,
    };
    checkoutBook(checkmeOut);
    navigate("/books");
  }

  return (
    <>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      <div>Description: {book.description}</div>
      <div>
        <img src={book.coverimage} />
      </div>
      {book.available && <div>Available for checkout! {book.available}</div>}
      {!book.available && <div>Unavailable for checkout.</div>}
      {book.available && token && (
        <div>
          <button onClick={checkOut}>Check Out</button>
        </div>
      )}
    </>
  );
}
