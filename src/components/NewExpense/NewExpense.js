import React,{useState}from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const[isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);//via app component
    };
    const startEditingExpenseHandler=()=>{
        setIsEditing(true);
    };

    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
    
    return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingExpenseHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;