import Grid from "../Grid/Grid";
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  
  return (
  <Grid>
      {todos.map((todo, index) => { 
        return (
          <GridItem key={todo.id}>
            <TodoListItem todo={todo} index={index + 1} />
          </GridItem>
        )
      })}
</Grid>
  );
};

export default TodoList;
