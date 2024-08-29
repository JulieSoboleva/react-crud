import { LoaderFunction, defer } from 'react-router-dom';

const apiURL = import.meta.env.VITE_SERVER_URL;

interface IRequestProps {
    query: string,
    method: string,
    content?: string,
    id?: string,
}

export const getPosts = async () => {
    const res = await fetch(`${apiURL}/posts`);
    return res.json();
};

export const postsLoader: LoaderFunction = async () => {
    return defer({
        posts: getPosts(),
    });
};

export const postLoader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`${apiURL}/posts/${id}`);
    const post = await res.json();
    return post;
};

export const createRequest = async ({ query, method, content, id }: IRequestProps) => {
    let requestURL = `${apiURL}/${query}`;
    if (id) {
        requestURL += `/${id}`;
    }

    const response = await fetch(requestURL, {
        method: method,
        headers: new Headers({ 'content-type': 'application/json' }),
        body: content ? JSON.stringify({ id, content }) : null,
    });

    if (!response.ok) {
        throw new Error('Request error');
    }
    
    return response.status === 200 ? await response.json() : null;
};
