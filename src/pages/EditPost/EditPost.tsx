import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { baseURL } from '../../App';
import { IPost, ISavePostProps } from '../../models';
import { createRequest, getPosts } from '../../loaders';

import './editPost.scss';

export const EditPost = () => {
    const [post, setPost] = useState<string>('');
    const navigate = useNavigate();
    const item = useLoaderData() as IPost;
    const id = String(item.id);

    const onSavePostHandler = ({event, id, post, navigate}: ISavePostProps) => {
        event.preventDefault();
        if (post) {
            createRequest({
                query: 'posts',
                method: 'PUT',
                id: id,
                content: post,
            });
        }

        getPosts();
        navigate(`${baseURL}/`);
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='card'>
                    <div className='head-holder'>
                        <span className='post-editor_header'>Редактировать публикацию</span>
                        <Link to={`${baseURL}/`}>
                            <CloseIcon style={{ cursor: 'pointer' }} />
                        </Link>
                    </div>

                    <div>
                        <span className='card_time'>{moment(item.created).fromNow()}</span>

                        <form
                            className={'new-post-input'}
                            noValidate
                            autoComplete='off'
                            onSubmit={(event) => {
                                onSavePostHandler({ event, id, post, navigate });
                                setPost('');
                            }} >

                            <TextField
                                defaultValue={item.content}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPost(e.target.value)}
                                id='outlined-basic'
                                label=''
                                variant='outlined'
                                className='card_content'
                                style={{ width: '100%' }} />
                            <div className='btn-holder'>
                                <Button variant='contained' color='primary' type='submit'>
                                    Сохранить
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};