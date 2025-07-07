export const Footer = ({ webName, year }) => {
    return (
        <div className="footer bg-dark text-light text-center py-4" style={{ height: "50px" }}>
            <span>Copyright © {webName} {year}</span>
        </div>
    )
}