import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import { CreatePost } from '../../components/CreatePost';
import { IPost } from '../../models';
import { Card } from '../../components/Card';

import './posts.scss';

export const Posts = () => {
    const { posts } = useLoaderData() as { posts: Promise<IPost[]> };

    return (
        <div className='wrapper'>
            <div className='container'>
                <CreatePost />

                <ul>
                    <Suspense fallback={<p className='loading'>Загрузка постов...</p>}>
                        <Await resolve={posts}>
                            {(_posts: IPost[]) => (
                                <>
                                    {_posts.map((post) => (
                                        <Card key={post.id} item={post}/>
                                    ))}
                                </>
                            )}
                        </Await>
                    </Suspense>
                </ul>
            </div>
        </div>
    );
};
