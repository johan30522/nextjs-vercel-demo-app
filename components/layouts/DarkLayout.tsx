
interface DarkLayoutProps {
    children: React.ReactNode
}

export const DarkLayout = ({ children }: DarkLayoutProps) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '10px',
            padding: '10px',
        }}>
            <h3>Dark Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
