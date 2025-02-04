import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, index, delTodo}) => {
  return (
  <div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    TODO #{index}
  </Text>
  <Text>{todo.text}</Text>
      <button onClick={() => delTodo(todo.id)} className={style.deleteButton} type="button">
    <RiDeleteBinLine size={24} />
  </button>
</div>
  );
};

export default TodoListItem;
