import * as _ from "lodash";
import { useState } from "react";
import * as styles from "./searchBar.m.scss";

export default function SearchBar<Type>({ searchedItems, updateItems }: { searchedItems: Type[]; updateItems: (text: string) => void }) {
  const [emptySearchBar, setEmptySearchBar] = useState<boolean>(true);
  const searchItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItems(event.target.value);
    if (event.target.value !== "") {
      setEmptySearchBar(false);
    } else {
      setEmptySearchBar(true);
    }
  };

  return (
    <div className={styles.searchBarWrapper}>
      <input placeholder="Search" className={styles.search} onChange={_.debounce(searchItems, 300)} />
      {searchedItems.length === 0 && !emptySearchBar ? (
        <button type="button" className={styles.resultContainer}>
          No results found
        </button>
      ) : null}
    </div>
  );
}
