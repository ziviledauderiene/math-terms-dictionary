import TiArrowSortedUp from "./assets/TiArrowSortedUp";
import TiArrowSortedDown from "./assets/TiArrowSortedDown";
import Translations from "./Translations";

const Table = ({ stickySearch, words, setWords, grade }) => {
  return (
    <main className="main">
      <table>
        <thead className={stickySearch ? "sticky" : ""}>
          <tr>
            <th>
              Lietuviškai <TiArrowSortedDown />
              <TiArrowSortedUp />
            </th>
            <th>
              Ukrainietiškai <TiArrowSortedDown />
              <TiArrowSortedUp />
            </th>
            <th>
              Angliškai <TiArrowSortedDown />
              <TiArrowSortedUp />
            </th>
            <th>
              Rusiškai <TiArrowSortedDown />
              <TiArrowSortedUp />
            </th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <Translations key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
