import React from 'react';
import { Post } from '../helpers/types';

interface PostListItemProps {
    post: Post;
    active: boolean;
    onClick: () => void;
}

export function PostListItem({ post, active, onClick }: PostListItemProps) {
    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                padding: '9px 10px',
                borderRadius: 6,
                marginBottom: 4,
                fontSize: 15,
                lineHeight: 1.4,
                background: active ? '#E3DFF5' : 'transparent',
                color: active ? '#463A73' : '#4A4844',
                fontWeight: active ? 600 : 400,
            }}
        >
            {post.title}
        </div>
    );
}