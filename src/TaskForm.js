import React, { useState, ueEffect, useEffect } from 'react';
import Datepicker from "react-datepicker";
import select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { FcAddImage } from "react-icons/fc";
import "react-datepicker/dist/react-datepicker.css";
import tags from "../date/tags.json";
import {Formik, Form, Field}from "formik";

const TaskForm=({
    modal,
    toggle,
    onCreate,
    task:taskDate,
    defaultTask,
    type="Create",
    onUpdate,
}) => {
    const[task,setTask]=useState({...defaultTask,id: uuidv4() });
    const [initialValues,setInitialvalues]= useState({
        task:"",
        desc:"",
        deadlineL:"",
        ispriority:false,
        tags:[],
        image:"",
        
    });
const handleSave = (values) => {
    e.preventDefault()
    type === "Create" ? onCreate(values) : onUpdate(values,values.id);
    toggle();

};
useEffect(() => {
    if (taskDate) {
        setTask(taskDate);
    }
}, [taskDate]);

return (
    <Formik initialValues={initialValues} onsubmit={handleSave}>
    {(props) => (
        <Form>
        
        <div className={'modal &{modal ?"open" :""}'} id="modal">
            <div className="modal-content">
                <button 
                onClick={toggle} 
                className="modal-close button"
                title="Close modal"
                >
                X</button>
                <h3>{type} Task</h3>
                <div className="modal-area">
                <div className="modal-body">
                <div className="modal-form">
                <div className="form-group">
                <label htmlFor={'title-${task.id}'}>Task</label>
                <field
                 id={'title-${task.id}'} 
                 type="text"
                  name ="Task" 
                  
                  />
                </div>
                <div className="form-group" >
        
                <label htmlFor={'deadline=${task.id}'}>deadline</label>
            
                <Datepicker
                id={'deadline-${task.id}'}
                selected={
                    task.deadline ? new Date (task.deadline): null
                }
                onChange={(date) =>
                    // setTask((prev)) => ({...prev,deadline:date })
                    props.setFiedValue("deadline",date)

                }
                showTimeSelect
                dateformat="Pp"
                todayButton="Today"
                value={task.deadline ? new Date(task.deadline) : null}
                />
                 </div>
                <div className="form-group">
                <label htmlFor={'description-${task.id}'}>
                Description
                </label>
                <field  type="textarea"id={'description-${task.id}'}name="desc" />

                </div>
                <div className="form-group property-input-container">
                <label htmlFor={'priority-${task.id}'}>
                <input
                type="checkbox"
                id={'property-${task.id}'}
                name="priority"
                checked={task.priority}
                />{""}
                priority
                </label>
                </div>
            
                <div className='form-group'>
                <label htmlFor={'tags-${task.id}'}>Tags</label>

                 <div>
                <select
                id={'tags-${task.id}'}
        option={tags.map(tag => ({
            value: tag,Name,
            label:tag,Name,
            ...tag
        }))}
        isMulti
        onChange={(selectedOption) => 
            setTask((prev) => ({
                ...prev,
            tags: selectedOption.map(({id,Name}) => ({
                id,
                Name,
            })),
        }))
    }
    value={task.tags.map((tag)=>({
        value: tag.name,
        label: tag.name,
        ...tag,
    }))}
    />
    </div>
        </div>
        <div className="form-group" >
        image
        <label htmlFor={'image-${task.id} '} className="image-input-label"
className="image-input-label"
>
    {task,image.length> 0?(
        <img src={task.image} alt="" width="200"/>
    ):(
<FcAddImage fontsize={50}/>
    )}
    
        </label>
    <input
        id ={'image-${task.id} '}
        className='input-image'
        name="image"
        accept="image/*"
        type="file"
        />
        </div>
        <footer>
        <button type="submit" className= "button primary" >
        { type=== "Create"  ? "create" : "Update"}
        </button>
        <button className="button secondary" onclick={toggle}> 
        cancel
        </button>
        </footer>
        </div>
        </div>
        </div>
        </div>
        </div>
    </Form>
        </Formik>

    
    )};

export default TaskForm;

