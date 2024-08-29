import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './createPost.scss';

export const CreatePost = () => {
    return (
        <div className='card'>
            <div className='btn-holder'>
                <Link to={'/posts/new'}>
                    <Button variant='contained' color='primary'>
                        Создать пост
                    </Button>
                </Link>
            </div>
        </div>
    );
};