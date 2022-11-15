
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: `url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      backgroundSize: 'cover'
    }}
    >
     <Todo />

    </div>
  );
}
export default App;
