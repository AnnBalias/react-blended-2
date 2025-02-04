import Grid from "../Grid/Grid";
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, delTodo}) => {
  
  return (
  <Grid>
      {todos.map((todo, index) => { 
        return (
          <GridItem key={todo.id}>
            <TodoListItem todo={todo} index={index + 1} delTodo={delTodo} />
          </GridItem>
        )
      })}
</Grid>
  );
};

export default TodoList;
