import { useEffect, useState } from "react";
import OutlineInput from "./components/OutlineInput";
import PrimaryButton from "./components/PrimaryButton";
import Todo from "./components/ToDo";
import TextButton from "./components/TextButton";

interface Todo {
  isComplete: boolean;
  value: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (value: string) => {
    const newTodo: Todo = {
      isComplete: false,
      value,
    }
    setTodoList((currentList) => ([...currentList, newTodo]));
  }

  const toggleTodo = (index: number) => {
    setTodoList((currentList) => {
      const newList = [...currentList];
      newList[index].isComplete = !newList[index].isComplete;
      return newList;
    });
  }

  const getUncompletedTodo = (list: Todo[]) => {
    return list.filter((todo) => !todo.isComplete);
  }

  const deleteAllCompletedTodo = () => {
    setTodoList((currentList) => (getUncompletedTodo(currentList)));
  };

  useEffect(() => {
    console.log('todoList', todoList);
  }, [todoList]);

  return (
    <div className="app">
      <h1 className="app-title">&#128466; To Do List</h1>

      <div className="app-form">
        <OutlineInput
          value={inputValue}
          onChange={(v) => setInputValue(v)}
          placeholder="무엇을 해야 하나요?"
        />
        <PrimaryButton
          label="할 일 추가"
          onClick={() => addTodo(inputValue)}
        />
      </div>

      <div className="app-list">
				{todoList.map((todo, index) => (
          <Todo
            isComplete={todo.isComplete}
            value={todo.value}
            onClick={() => toggleTodo(index)}
          />
        ))}
      </div>

      <div className='app-footer'>
				<p>남은 일 :{getUncompletedTodo(todoList).length}개</p>
        <TextButton
          label="완료 목록 삭제"
          onClick={() => deleteAllCompletedTodo()}
        />
      </div>
    </div>
  );
}

export default App
