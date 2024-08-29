import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import { IPost, IPostClickProps } from '../../models';

import './card.scss';

interface ICardProps {
    item: IPost,
}

export const Card = ({item}: ICardProps) => {
    const {id, content, created} = item;
    const navigate = useNavigate();

    const onPostClickHandler = ({ id, navigate }: IPostClickProps) => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className='card'
            style={{ cursor: 'pointer' }}
            onClick={() => onPostClickHandler({ id, navigate })} >
            <span className='card_time'>{moment(created).fromNow()}</span>
            <span className='card_content'>{content}</span>
        </div>
    );
};