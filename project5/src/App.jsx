import { useEffect, useState } from 'react'
import './App.css'
import BookInfo from "./Components/BookInfo";

function App() {
  const [list, setList] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [size, setSize] = useState(0);
  const [firstTitle, setFirstTitle] = useState("");
  const [lastTitle, setLastTitle] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const searchItems = searchValue => {
    setSearchTitle(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) => 
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
      setFilteredList(filteredData);
    } else {
      setFilteredList(list);
    }
  };

  useEffect(() => {
     const fetchAllBookData = async () => {
       const response = await fetch(
         "https://openlibrary.org/authors/OL2832500A/works.json?limit=200" 
       );
       const json = await response.json();
       setList(json.entries);
       setSize(json.size);
       setFirstTitle(json.entries[0].title);
       setLastTitle(json.entries[json.size - 1].title);
     };
     fetchAllBookData().catch(console.error);    
  }, []);
  
  

  return (
    <>
      <h1>Jeff Kinney's Books</h1>
      <h3>Number of Books: {size}</h3>
      <h3>First Book Released: {firstTitle}</h3>
      <h3>Latest Book Released: {lastTitle} </h3>
      <input type="text" placeholder="Search by Title" onChange={(e) => searchItems(e.target.value)} />

      {searchTitle.length > 0 ?
        filteredList.map((book) =>
          <BookInfo
            revision={book.revision}
            title={book.title}
            created={book.created.value}
          />
          )
        :
        list && list.map((book, index) => (
          <BookInfo 
            key={index}
            revision={book.revision} 
            title={book.title} 
            created={book.created.value} 
          />
        ))
      }

    </>
  )
}

export default App
