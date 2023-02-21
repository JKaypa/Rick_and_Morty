import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onChange, id }) {
  
  return (
    <div className={style.container}>
      <button className={style.random} value='click' onClick={(event) => onSearch(id, event)}>
        Random character
      </button>
      <input
        className={style.search}
        onChange={onChange}
        onKeyDown={(event) => {onSearch(id, event)}}
        type="search"
        value={id}
        placeholder='Put an id and press Enter'
      />
    </div>
  );
}
