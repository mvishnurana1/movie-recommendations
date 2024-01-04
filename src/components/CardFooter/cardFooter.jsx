import Button from "../Button/button";
import './cardFooter.scss';

function CardFooter() {
    return <>
        <div className="footer-background">
            <span style={{"textAlign":"centre", "color":"white"}}>Available on</span>
            <div style={{"display": "flex", "alignItems": "centre", "gap":"0.25rem"}}>
                <Button classNames="icon-button" youtubeButton />
                <Button classNames="icon-button" googlePlayButton />
                <Button classNames="icon-button" netflixButton />
                <Button classNames="icon-button" primeButton />
            </div>
        </div>
    </>
}

export default CardFooter;
