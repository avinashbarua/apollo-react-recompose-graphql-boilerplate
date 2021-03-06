import React from 'react';
import { withState, pure, compose } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// The data prop, which is provided by the wrapper below, contains
// a `loading` key while the query is in flight, and the bookSearch
// results when they are ready
const BookSearchResultsPure = ({ data: { loading, bookSearch } }) => {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {bookSearch.map(book =>
          <li key={book.id}>
            <Link to={`/details/${book.id}`}>
              {book.title} by {book.author.name}
            </Link>
          </li>
        )}
      </ul>
    );
  }
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component.
//
// Note that if you type a search field and then hit backspace, the
// Apollo cache kicks in and no actual data loading is done.
const data = graphql(gql`
  query BookSearchQuery($keyword: String!) {
    bookSearch(keyword: $keyword) {
      id
      image
      title
      author {
        id
        name
      }
    }
  }
`, {
  // The variable $keyword for the query is computed from the
  // React props passed to this container.
  options: (props) => ({
    variables: { keyword: props.keyword },
  }),
});

// Attach the data HoC to the pure component
const BookSearchResults = compose(
  data,
  pure,
)(BookSearchResultsPure);

// Use recompose to keep the state of the input so that we
// can use functional component syntax
const keyword = withState('keyword', 'setKeyword', '');

const BookSearchPure = ({ keyword, setKeyword }) => (
  <div>
    <input
      type="text"
      value={ keyword }
      onChange={(e) => setKeyword(e.target.value)}
    />

    <BookSearchResults keyword={keyword} />
  </div>
);

// Attach the state to the pure component
const BookSearch = compose(
  keyword,
  pure,
)(BookSearchPure);

export default BookSearch;
