import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onChange, id }) {
  
  return (
    <div className={style.container}>
      <input
        className={style.searchBar}
        onChange={onChange}
        onKeyDown={(event) => {onSearch(id, event)}}
        type="search"
        value={id}
        placeholder=''
      />
      <button className={style.searchBar} value='click' onClick={(event) => onSearch(id, event)}>
        Random
      </button>
    </div>
  );
}
