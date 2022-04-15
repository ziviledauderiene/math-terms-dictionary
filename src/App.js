import data from "./assets/data.json";
import "./styles/app.scss";
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import { useEffect, useState } from "react";

function App() {
  const [words, setWords] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [stickySearch, setStickySearch] = useState(false);
  const [grade, setGrade] = useState("visos");

  window.addEventListener("scroll", () => {
    const search = document.getElementById("search");
    if (window.scrollY >= search.offsetHeight) {
      setStickySearch(true);
    } else {
      setStickySearch(false);
    }
  });

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredWords = data.filter(
        (word) =>
          word.translations.lt
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          word.translations.ua
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          word.translations.en
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          word.translations.ru.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setWords(filteredWords);
    } else {
      setWords(data);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (grade !== "visos") {
      const filteredWords = data.filter((word) => word.grade.includes(grade));
      setWords(filteredWords);
    } else {
      setWords(data);
    }
  }, [grade]);

  return (
    <>
      <Header />
      <Search
        stickySearch={stickySearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setGrade={setGrade}
        grade={grade}
      />
      <Table
        stickySearch={stickySearch}
        searchTerm={searchTerm}
        words={words}
        setWords={setWords}
        grade={grade}
      />
    </>
  );
}

export default App;
