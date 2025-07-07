export const Card = ({ title, description, label, imageUrl }) => {
    return (
        <div className="card mb-5" >
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{label}</a>
            </div>
        </div>
    );
}