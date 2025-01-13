import * as _ from "lodash";
import { useState } from "react";
import * as styles from "./searchBar.m.scss";

export default function SearchBar<Type>({
  searchedItems,
  setSearchedItems,
  fetchSearchItems,
}: {
  searchedItems: Type[];
  setSearchedItems: (items: Type[]) => void;
  fetchSearchItems: (text: string) => Promise<Type[]>;
}) {
  const [emptySearchBar, setEmptySearchBar] = useState<boolean>(true);
  const searchItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;
    if (text !== "") {
      const prom: Promise<Type[]> = fetchSearchItems(text);
      prom
        .then((res) => {
          setSearchedItems(res);
        })
        .catch((err) => {
          console.error(err);
        });
      setEmptySearchBar(false);
    } else {
      setEmptySearchBar(true);
      setSearchedItems([]);
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
