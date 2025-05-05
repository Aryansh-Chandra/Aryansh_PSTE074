export default function MyForm() {
    const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('/book/:id')
})
const Author = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
  router.use(timeLog)
  
  // define the home page route
  router.get('/', (req, res) => {
    res.send('Number_of_pages')
  })
  // define the about route
  router.get('/about', (req, res) => {
    res.send('About birds')
  })

  app.post('/', (req, res) => {
    res.send('Chnage the book')
  })
  }
    return (
      
        <><label>
            Text input: <input name="Author " />
        </label><button type="button" onClick={handleClick} id="Author ">
                Author
            </button>
            <input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
 <label>
                Text input: <input name="Title" />
            </label><button type="button" onClick={handleClick} id='Title'>
                Title
            </button>
            <input
  id={props.id}
  className=""
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
            <label>
                <input name="Price" />
            </label>
            <input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
            
            <button type="button" onClick={handleClick} id="Price">
                Price
            </button>
            <input
  id={props.id}
  className="Price"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
<label>
                <input name="Number of Pages"> </input>
            </label><button type="button" onClick={handleClick} id='NO_OF_Pages'>
                Number of Pages
            </button></>)