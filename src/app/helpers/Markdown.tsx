import React, { ReactNode } from 'react';

// Small, dependency-free markdown -> JSX renderer.
// Covers headers, bold/italic, links, lists, and paragraphs.
export function renderMarkdown(md: string): ReactNode[] {
    const lines = md.split('\n');
    const blocks: ReactNode[] = [];
    let listBuffer: string[] = [];

    const flushList = () => {
        if (listBuffer.length) {
            blocks.push(
                <ul key={`ul-${blocks.length}`} style={{ margin: '0 0 16px', paddingLeft: 22 }}>
                    {listBuffer.map((item, i) => (
                        <li key={i} style={{ marginBottom: 6, lineHeight: 1.6 }}>
                            {inline(item)}
                        </li>
                    ))}
                </ul>
            );
            listBuffer = [];
        }
    };

    function inline(text: string): ReactNode[] {
        const parts: ReactNode[] = [];
        let rest = text;
        const pattern = /(\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\))/;
        let key = 0;
        while (rest.length) {
            const m = rest.match(pattern);
            if (!m) {
                parts.push(rest);
                break;
            }
            if (m.index! > 0) parts.push(rest.slice(0, m.index));
            if (m[2] !== undefined) parts.push(<strong key={key++}>{m[2]}</strong>);
            else if (m[3] !== undefined) parts.push(<em key={key++}>{m[3]}</em>);
            else if (m[4] !== undefined)
                parts.push(
                    <a key={key++} href={m[5]} style={{ color: '#7A5FC7' }}>
                        {m[4]}
                    </a>
                );
            rest = rest.slice(m.index! + m[0].length);
        }
        return parts;
    }

    lines.forEach((line, i) => {
        const h = line.match(/^(#{1,3})\s+(.*)/);
        const li = line.match(/^[-*]\s+(.*)/);
        const oli = line.match(/^\d+\.\s+(.*)/);

        if (h) {
            flushList();
            const Tag = (['h1', 'h2', 'h3'] as const)[h[1].length - 1];
            const sizes = [26, 21, 17];
            blocks.push(
                <Tag
                    key={i}
                    style={{
                        fontSize: sizes[h[1].length - 1],
                        fontWeight: 600,
                        margin: '20px 0 10px',
                        color: '#2A2A28',
                    }}
                >
                    {inline(h[2])}
                </Tag>
            );
        } else if (li || oli) {
            listBuffer.push((li || oli)![1]);
        } else if (line.trim() === '') {
            flushList();
        } else {
            flushList();
            blocks.push(
                <p key={i} style={{ margin: '0 0 14px', lineHeight: 1.7, color: '#3A3A38' }}>
                    {inline(line)}
                </p>
            );
        }
    });
    flushList();
    return blocks;
}