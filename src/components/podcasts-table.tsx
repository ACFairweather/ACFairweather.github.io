import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

interface Podcast {
  title: string,
  hosts: string,
  review: number,
  genre: string
}

const PodcastTable = ({ }) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'podcasts.json',
      ).then((response) => response.json())
        .then((data) => {
          setPodcasts(data)
        });
    };

    fetchData();
  }, []);
  // : { title: string; year: number; author: string; review: number; }
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr><th>Title</th><th>Hosts</th><th>Genre</th><th>Review</th></tr>
      </thead>
      <tbody>
        {podcasts.map((podcast) => (
          <tr
          //   onClick={() => this.handleClick({ id: podcast.id, title: podcast.title, year: podcast.year, author: podcast.author, review: podcast.review })} key={podcast.id}
          >
            <td>{podcast.title}</td>
            <td>{podcast.hosts}</td>
            <td>{podcast.genre}</td>
            <td>{podcast.review}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PodcastTable;