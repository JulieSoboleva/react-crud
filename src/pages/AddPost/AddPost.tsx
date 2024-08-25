import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../../App';
import { createRequest, getPosts } from '../../loaders';
import { INewPostSubmitProps } from '../../models';

import './addPost.scss';

export const AddPost = () => {
    const [post, setPost] = useState('');
    
    const navigate = useNavigate();

    const onNewPostSubmitHandler = ({ event, post, navigate }: INewPostSubmitProps) => {
        event.preventDefault();
        if (post) {
            createRequest({
                query: 'posts',
                method: 'POST',
                content: post,
            });
        }
        
        getPosts();
        navigate(`${baseURL}/`);
    };

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='card'>
                    <div className='head-holder'>
                        <Link to={`${baseURL}/`}>
                            <CloseIcon style={{ cursor: 'pointer' }} />
                        </Link>
                    </div>
                    <form
                        className={'new-post-input'}
                        noValidate
                        autoComplete='off'
                        onSubmit={(event) => {
                            onNewPostSubmitHandler({ event, post, navigate });
                            setPost('');
                        }} >
                        <TextField
                            value={post}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPost(e.target.value)}
                            id='outlined-basic'
                            label='Новая публикация'
                            variant='outlined'
                            style={{ width: '100%' }} />
                        <div className='btn-holder'>
                            <Button variant='contained' color='primary' type='submit'>
                                Опубликовать
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
