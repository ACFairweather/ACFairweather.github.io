import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

interface Book {
  title: string,
  yearPublished: number | string,
  yearRead: number | string,
  author: string,
  review: number,
  genre: string,
  type: string
}

const BookTable = ({ }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'books.json',
      ).then((response) => response.json())
        .then((data) => {
          setBooks(data)
        });
    };

    fetchData();
  }, []);
  // : { title: string; year: number; author: string; review: number; }
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr><th>Title</th><th>Type</th><th>Year Published</th><th>Year Read</th><th>Author</th><th>Genre</th><th>Review</th></tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr
          //   onClick={() => this.handleClick({ id: book.id, title: book.title, year: book.year, author: book.author, review: book.review })} key={book.id}
          >
            <td>{book.title}</td>
            <td>{book.type}</td>
            <td>{book.yearPublished}</td>
            <td>{book.yearRead}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.review}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BookTable;