# REST Countries API with colour theme changer.

This single page application uses Svelte, Tailwind CSS and RESTful API to display country information. I really enjoyed learning and using Svelte. This framework seems very accessible, modular, and legible to me by having the logic as part of the HTML which allows me to quickly understand and implement features. I found defining my state in a separate file and importing it to any page that required it to be a very useful method of accessing my state.

My biggest challenge I came across during creating this website was with my routing. When visiting a new country page through a 'bordering country' button my code would not update the country name to call the API correctly. I fixed this by adding a small delay when getting the name from the browser's address bar.

<img width="500" alt="Home page" src="https://user-images.githubusercontent.com/10031199/187712812-95b41a89-c351-4ccd-9f92-c09c9c0dafde.png">
<img width="500" alt="Country page" src="https://user-images.githubusercontent.com/10031199/187712912-5dbf0231-0de5-4b11-b60e-229484e812b0.png">
