import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onChange, id }) {
  return (
    <div className={style.container}>
      <input
        className={style.searchBar}
        onChange={onChange}
        type="search"
        value={id}
      />
      <button className={style.searchBar} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
