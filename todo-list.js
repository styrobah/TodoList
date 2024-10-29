const todoList = [];

    function renderTodo() {
        
        let todoListHtml = '';


        todoList.forEach((todoObject,index) => {
            const name = todoObject.name;
            const dueDate = todoObject.date;
            
            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onClick="
                todoList.splice(${index},1);
                renderTodo();
                console.log(todoList);
            " class="delete-todo-button">
            Delete</button>
            `;
            todoListHtml += html;
        })
        document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    }
        
    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const dateInputElement = document.querySelector('.js-date-input');
        const name = inputElement.value;
        const date  = dateInputElement.value;
        todoList.push({
            //name: name,
            //date: date
            //because the name of the value is equal to the name of the property, we can simple put
            name,
            date
        })
        //todoList.push(name);
        console.log(todoList);

        inputElement.value = ''; //this will clear the text box

        renderTodo();
    }