import React, {Component} from "react";
import style from './TaskList.module.css'

class TaskList extends Component {
    tasks=[
        {
            id: "th",
            text: "Hi, I'm Maria. And i like cats!",
        },
        {
            id: "iv",
            text: "Here is my dog Kano. He is cutie bun.",
        },
        {
            id: "mg",
            text: "It's banacake. This is simple recipe how to cook it.",
        },
        {
            id: "xs",
            text: "Do you know how to cook apple pie?",
        },
        {
            id: "kq",
            text: "This bird is really rare. You can meet it only in mountains.",
        }
]

    deleting = (className) => {
        let li = document.querySelector(`.${className}`)
        li.remove()  

    }

    render(){
        return(
            <div>
                <ul className={style.list}>
                    {this.tasks.map(task => 
                        <li key={task.id} className={task.id}>                       
                            <p>{task.text}</p>
                            <button onClick={(m) => this.deleting(task.id)}>delete</button>
                        </li>
                    )}
                </ul>
                
            </div>
        )
    }
}



export default TaskList;
