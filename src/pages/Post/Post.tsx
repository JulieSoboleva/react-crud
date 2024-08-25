import moment from 'moment';
import 'moment/locale/ru';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';

import { baseURL } from '../../App';
import { IPost, IPostClickProps } from '../../models';
import { createRequest, getPosts } from '../../loaders';

import './post.scss';

export const Post = () => {
    const navigate = useNavigate();
    const post = useLoaderData() as IPost;
    const id = post.id;

    const onPostDeleteHandler = ({id, navigate}: IPostClickProps) => {
        if (id) {
            createRequest({
                query: 'posts',
                method: 'DELETE',
                id: String(id),
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

                    {post && (
                        <>
                            <span className='card_time'>{moment(post.created).fromNow()}</span>
                            <span className='card_content'>{post.content}</span>
                        </>
                    )}
                    

                    <div className='btn-holder'>
                        <Link to={`${baseURL}/posts/edit/${post.id}`}>
                            <Button variant='contained' color='primary'>
                                Изменить
                            </Button>
                        </Link>
                        &nbsp;
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => onPostDeleteHandler({ id, navigate })} >
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
