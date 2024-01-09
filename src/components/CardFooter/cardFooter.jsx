import IconButton from "../IconButton/iconButton";
import './cardFooter.scss';

function CardFooter({ availableOn }) {
    return <>
        <div className="footer-background">
            <span className="text">Available On</span>
            <div className="button-cluster">
                {availableOn.map((value, index) =>
                    <IconButton classNames="button-no-native-style" btn={value} key={index} />
                )}
            </div>
        </div>
    </>
}

export default CardFooter;
