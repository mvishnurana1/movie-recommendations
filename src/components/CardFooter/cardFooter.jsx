import Button from "../Button/button";
import './cardFooter.scss';

function CardFooter({ availableOn }) {
    return <>
        <div className="footer-background">
            <span className="text">Available on</span>
            <div className="button-cluster">
                {availableOn.map((value, index) =>
                    <Button classNames="icon-button" btn={value} key={index} />
                )}
            </div>
        </div>
    </>
}

export default CardFooter;
