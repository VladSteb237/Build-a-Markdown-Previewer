
import './App.css';
import { marked } from 'marked';
import { useState } from 'react';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
  \`\`\`

  - First item
  - Second item
  - Third item

  >blockquote

  ![alt text](image.jpg)

  **bold text**

  `);

  marked.setOptions({
    breaks: true
  });
  return (
    <div className="App">
      <textarea
        id="editor"
        cols="30"
        rows="10"
        onChange={(e) => { setText(e.target.value) }} value={text}></textarea>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  );
}

export default App;
