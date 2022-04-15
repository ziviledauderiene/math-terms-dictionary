const Search = ({
  stickySearch,
  setSearchTerm,
  searchTerm,
  setGrade,
  grade,
}) => {
  return (
    <section className={stickySearch ? "search sticky" : "search"} id="search">
      <div className="grades">
        <p>
          <b>Ieškokite terminų pagal klasę:</b>
        </p>
        <ul>
          <li>
            <input
              type="checkbox"
              value="1"
              id="grade1"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade1">
              1
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="2"
              id="grade2"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade2">
              2
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="3"
              id="grade3"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade3">
              3
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="4"
              id="grade4"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade4">
              4
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="5"
              id="grade5"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade5">
              5
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="6"
              id="grade6"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade6">
              6
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="7"
              id="grade7"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade7">
              7
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="8"
              id="grade8"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade8">
              8
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="9"
              id="grade9"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade9">
              9
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="10"
              id="grade10"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade10">
              10
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="11"
              id="grade11"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade11">
              11
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="12"
              id="grade12"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="grade12">
              12
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="visos"
              id="gradeVisos"
              onInput={(e) => setGrade(e.target.value)}
            />
            <label className="grade-button" htmlFor="gradeVisos">
              visos
            </label>
          </li>
        </ul>
        {grade}
      </div>

      <form>
        <input
          type="text"
          placeholder="Arba įveskite ieškomą žodį bet kuria kalba"
          onChange={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />

        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </form>
    </section>
  );
};

export default Search;
