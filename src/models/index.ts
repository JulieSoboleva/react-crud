import { NavigateFunction } from 'react-router-dom';

export interface IPost {
    id: number,
    content: string,
    created: Date,
}

export interface INewPostSubmitProps {
    event: React.FormEvent<HTMLFormElement>, 
    post: string, 
    navigate: NavigateFunction,
}

export interface IPostClickProps {
    id: number,
    navigate: NavigateFunction,
}

export interface ISavePostProps {
    id: string,
    event: React.FormEvent<HTMLFormElement>, 
    post: string, 
    navigate: NavigateFunction,
}