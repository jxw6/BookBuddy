import { useEffect, useState } from "react";
import { getUser, deleteReservation } from "../API";

export default function Account({ token, navigate }) {
  const [user, setUser] = useState(null);
  //const [reservations, setReservations] = useState([]);
  //const [selectedBook, setSelectedBook] = useState([]);

  useEffect(() => {
    getUser(token, setUser);
  }, []);

  async function returnBook(bookId) {
    console.log("Book Returned!", bookId);
    await deleteReservation(token, bookId);
    await getUser(token, setUser);
  }

  return user && (
    <div>
      <h1>Account Profile</h1>
      <h2>
        {user.firstname} {user.lastname}
      </h2>
      <h2>Email: {user.email}</h2>
      <>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Checked Out Books</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Return Book</th>
            </tr>
            {user.books &&
              user.books.map((book) => {
                return (
                  <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                      <input
                        type="submit"
                        value="Return"
                        onClick={() => returnBook(book.id)}
                      ></input>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    </div>
  );
}
