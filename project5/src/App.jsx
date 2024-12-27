import { useEffect, useState } from 'react'
import './App.css'
import BookInfo from "./Components/BookInfo";
import BookChart from "./Components/BookChart";

function App() {
  const [list, setList] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [listofDates, setListofDates] = useState([]);
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
  const setDateList = (entry) => {
    const dates = entry.map(book => book.created.value);
    let years = [];
    for (const date of dates) {
      let tdate = new Date(date);
      years.push(tdate.getFullYear());
    }
    setListofDates(years);
  }

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
       setDateList(json.entries);
      };
     fetchAllBookData().catch(console.error);    
  }, []);
  
  

  return (
    <>
      <h1>Jeff Kinney's Books</h1>
      {list ? (
        <>
          <h3>Number of Books: {size}</h3>
          <h3>First Book Released: {firstTitle}</h3>
          <h3>Latest Book Released: {lastTitle} </h3>
          <BookChart yearList={listofDates} />


          <input type="text" placeholder="Search by Title" onChange={(e) => searchItems(e.target.value)} />

          {searchTitle.length > 0 ?
            filteredList.map((book) =>
            <BookInfo 
            revision={book.revision} 
            title={book.title} 
            created={book.created.value} 
            bookKey={book.key}
            />
              )
            :
            list.map((book, index) => (
              <BookInfo 
                revision={book.revision} 
                title={book.title} 
                created={book.created.value} 
                bookKey={book.key}
                />
            ))
          }
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
