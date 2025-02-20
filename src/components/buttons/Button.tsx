import Link from 'next/link'

interface Props {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
    href?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    // ...otherProps: Allows passing additional valid button attributes
    [otherProps: string]: any
}

export default function Paragraph({
    children,
    type = 'button',
    href = '',
    className = '',
    onClick,
    ...otherProps
}: Readonly<Props>) {
    const defaultClass: string = `
        py-3 px-9
        bg-black
        rounded-xl
        text-white text-lg no-underline font-bold
        cursor-pointer transition-colors 
        hover:bg-blue-400
        focus-within:bg-blue-400
        focus-within:outline-none
        disabled:opacity-50
    `

    return (
        <>
            {href && (
                <Link href={href} className={`${defaultClass} ${className}`}>
                    {children}
                </Link>
            )}

            {!href && (
                <button
                    type={type}
                    className={`${defaultClass} ${className}`}
                    onClick={onClick}
                    {...otherProps}
                >
                    {children}
                </button>
            )}
        </>
    )
}
