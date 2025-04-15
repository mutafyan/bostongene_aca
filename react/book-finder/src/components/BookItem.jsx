const BookItem = ({ title, author_name, first_publish_year, language }) => {
  return (
    <li>
      <div>{title}</div>
      <div>{author_name}</div>
      <div>{first_publish_year}</div>
      {/* <div>{language?.join(', ')}</div> */}
    </li>
  );
};

export default BookItem;
