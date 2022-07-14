export default function Presentation() {
    return (
        <div className="presentation-div">
            <div className="presentation-header">
                <h1>Georg Cantor</h1>
                <h3>Master of the infinite</h3>
                <div>georgcantor.website</div>
                <div className="presentation-contact">
                    <button className="contact-btn email"><img src="./mail.png" />Email</button>
                    <button className="contact-btn linkedin"><img src="./linkedin.png" />LinkedIn</button>
                </div>
            </div>
            <h2>About</h2>
            <p>Georg Cantor is not a front dev, it's a genius mathematician who formalised the notion of infinite, introducing the notion of countables sets, such N and Z.</p>
            <h2>Interests</h2>
            <p>In the twentiest one century, the vast majority of the mathematician community doesn't even discuss the value of his work, except a small constructivist trend, following Kronecker ideas.</p>
        </div>
    )
}