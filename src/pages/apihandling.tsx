import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import UsersList from '../components/UserCard';

const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

export default function ApiPractice (){
    const [userList , setUserList] = useState<any>([])
    const [response, setResponse] = useState('');

    const getData = ()=>{
        axios.get(apiUrl)
        .then((res) => {
            console.log('Get Data Successfully')
            setUserList([...res.data])
            setResponse(JSON.stringify(res.data, null, 2));
        })
        .catch((err) => {
            console.log(err)
            setResponse('Unsuccessful, error: ' + err.message);
        })
    }

    const postData = () =>{
        axios.post(apiUrl , {
            postId: 1,
            name: 'Jack',
            email: 'jack@gmail.com',
            body: 'comment body'
        })
        .then((res) => {
            console.log(res.data)
            setResponse(JSON.stringify(res.data, null, 2));
        })
        .catch((error) => {
            console.log(error)
            setResponse('Unsuccessful, error: ' + error.message);
        })
    }
    const putData = () => {
        axios.put('https://jsonplaceholder.typicode.com/comments/1' , {
            name: 'Smith',
            email: 'abc@gmail.com',
            body: 'Some Shopping Items'
        }).then((res) => {
            console.log(res.data)
            setResponse(JSON.stringify(res.data, null, 2));
        }).catch((error) => {
            console.log(error)
            setResponse('Unsuccessful, error: ' + error.message);
        })
    }

    const deleteData = () => {
        axios.delete('https://jsonplaceholder.typicode.com/comments/1')
            .then((res) => {
                console.log(res.data);
                setResponse('Deleted successfully');
            })
            .catch((error) => {
                console.log(error);
                setResponse('Unsuccessful, error: ' + error.message);
            });
    };
    
    return (
        <>
        <Container className="mt-5">
      <h1 className="mb-4">API PRACTICES</h1>
      <Button sx={{margin: 1}} variant="contained" color="primary" className="mb-3" onClick={getData}>
        GET
      </Button>
      <Button sx={{margin: 1}} variant="contained" color="secondary" className="mb-3" onClick={postData}>
        POST
      </Button>
      <Button sx={{margin: 1}} variant="contained" color="success" className="mb-3" onClick={putData}>
        PUT
      </Button>
      <Button sx={{margin: 1}} variant="contained" color="error" className="mb-3" onClick={deleteData}>
        DELETE
      </Button>
      <UsersList userList={userList}/>
      <TextareaAutosize
        minRows={10}
        style={{ width: '100%' }}
        value={response}
        placeholder="Data will be shown here..."
      />
    </Container>
        </>
    )
}
