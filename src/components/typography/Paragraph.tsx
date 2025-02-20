interface Props {
    children: React.ReactNode
    size?: string
    className?: string
}

export default function Paragraph({
    children,
    size = 'small',
    className = '',
}: Readonly<Props>) {
    const commonClassName: string = 'mb-1 text-inherit text-base leading-6'
    return (
        <>
            {size === 'large' && (
                <p
                    className={`${commonClassName} !mb-8 !text-2xl !leading-8 ${className}`}
                >
                    {children}
                </p>
            )}
            {size === 'medium' && (
                <p
                    className={`${commonClassName} !text-xl !leading-5 ${className}`}
                >
                    {children}
                </p>
            )}
            {size === 'small' && (
                <p className={`${commonClassName} !text-sm ${className}`}>
                    {children}
                </p>
            )}
            {size === 'xSmall' && (
                <p className={`${commonClassName} !text-xs ${className}`}>
                    {children}
                </p>
            )}
        </>
    )
}
