export default function BookRow({ setSelectedBook, book, navigate }) {

    return (
      <tr
        onClick={() => {
          setSelectedBook(book.id); navigate(`/books/${book.id}`)
        }}
      >
        <td>{book.name}</td>
      </tr>
    );
  }