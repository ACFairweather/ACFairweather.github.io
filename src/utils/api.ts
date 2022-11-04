export async function getAllBooks() {
    await fetch('books.json')
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}