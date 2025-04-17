import BookItem from "./BookItem";
import { Grid } from "@mui/material";

const BookList = ({ books }) => {
  return (
    <Grid container spacing={3} sx={{ mt: 2, alignItems: 'center', justifyContent: 'center' }}>
      {books.map(({ key, ...tail }) => (
        <Grid item xs={12} sm={6} key={key} sx={{ height: '100%' }}>
          <BookItem {...tail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;