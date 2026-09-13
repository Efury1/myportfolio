import React from 'react';
import { renderMarkdown } from '../helpers/Markdown';

export function Article({ title, body }) {
    return (
        <div style={{ flex: 1, padding: '32px 48px', maxWidth: 700, boxSizing: 'border-box' }}>
            {title && (
                <h1 style={{ fontSize: 30, fontWeight: 700, margin: '0 0 20px', color: '#221F1B' }}>
                    {title}
                </h1>
            )}
            {renderMarkdown(body)}
        </div>
    );
}