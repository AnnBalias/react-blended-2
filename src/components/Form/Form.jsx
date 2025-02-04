import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {

  const handSub = event => {

  event.preventDefault();
    const form = event.target;
    const text = form.elements.search.value;
    onSubmit(text);
  }

  return (
    <form onSubmit={handSub} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
