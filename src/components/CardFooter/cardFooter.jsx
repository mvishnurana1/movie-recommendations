import Button from "../Button/button";
import './cardFooter.scss';

function CardFooter() {
    return <>
        <div className="footer-background">
            <span className="text">Available on</span>
            <div className="button-cluster">
                <Button classNames="icon-button" youtubeButton />
                <Button classNames="icon-button" googlePlayButton />
                <Button classNames="icon-button" netflixButton />
                <Button classNames="icon-button" primeButton />
            </div>
        </div>
    </>
}

export default CardFooter;
