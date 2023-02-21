import style from './Options.module.css'

function Options({handleGender, handleOrder}) {
  
  return (
    <div className={style.container}>
      <select className={style.selectors} onChange={handleOrder}>
        <option value="">Order by</option>
        <option value="upward">Upward</option>
        <option value="downward">Downward</option>
      </select>
      <select className={style.selectors} onChange={handleGender}>
        <option value="">Filter by</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="All">All</option>
      </select>
    </div>
  );
}

export default Options;
