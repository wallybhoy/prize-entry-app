import React from 'react'

interface Props {
    children: React.ReactNode
    Tag?: string
    className?: string
}

export default function Heading({
    children,
    Tag = 'h1',
    className = '',
}: Readonly<Props>) {
    return (
        <>
            {Tag &&
                React.createElement(
                    Tag,
                    {
                        className: `font-bold ${className}`,
                    },
                    children
                )}
        </>
    )
}
