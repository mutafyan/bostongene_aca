import BookItem from "./BookItem";

const BookList = ({books}) => {
    console.log(books)
    return <ul>
        {books.map(({key, ...tail})=><BookItem key={key}  {...tail}/>)}
    </ul>

}

export default BookList;