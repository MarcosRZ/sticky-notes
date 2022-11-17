import Notes from './components/Note/Notes.component'

const INITIAL_STATE = [
  {
    id: 'cj9d9j1239j9cj8j1928hed91',
    text: "Hello World! 🐙",
    x: 300,
    y: 100,
    height: 300,
    width: 300,
    color: '#ffc0c0'
  },
  {
    id: 'casdww1239j9cj8j1928hed92',
    text: "Buy milk 🥛",
    x: 400,
    y: 200,
    height: 300,
    width: 300,
    color: '#f9ffc0'
  },
  {
    id: 'qieuyw1239j9cj8j1928hed93',
    text: "Enjoy 🎉",
    x: 500,
    y: 300,
    height: 300,
    width: 300,
    color: '#97c0ff'
  },
]

function App() {
  return (
      <Notes notes={INITIAL_STATE} />
  )
}

export default App
