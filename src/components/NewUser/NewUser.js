import React,{useState} from 'react';

import styles from './NewUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const NewUser = (props) => {

    const [ userName, setUserName] = useState('');
    const [ userAge, setUserAge] = useState('');
    const [ userNameInvalid, setUserNameInvalid] = useState(false);
    const [ userAgeInvalid, setUserAgeInvalid] = useState(false);

    const userNameHandler = event => {
        if(event.target.value) {
            setUserNameInvalid(false);
            setUserName(event.target.value);
        } else  {
            setUserNameInvalid(true);
        }
    }

    const userAgeHandler = event => {
        if(event.target.value) {
            setUserAgeInvalid(false);
            setUserAge(event.target.value);
        } else  {
            setUserAgeInvalid(true);
        }
    }

    const saveUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }
        if(userAge < -1) {
            return;
        }
        if(userName && userAge) {
            props.onSaveHandler({name:userName,age:userAge,id:parseInt((Math.random() * 100).toString()[0])});
        } else {
            setUserAgeInvalid(true);
            setUserNameInvalid(true);
        }
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={saveUserHandler}>
                <div className={`${userNameInvalid ? styles.invalid : ''}`}>
                    <label>Username</label>
                    <input type="text" onChange={userNameHandler}/>
                </div>
                <div className={`${userAgeInvalid ? styles.invalid : ''}`}>
                    <label>Age (Years)</label>
                    <input type="number" max="130" min="0" onChange={userAgeHandler}/>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default NewUser;