import './boxes.scss';

function Boxes({
    classNames,
    children,
    colors,
    boxesLayout
}) {
    if (!colors?.length) {
        return;
    }

    return colors.map((color, index) => <>
         <div className={classNames} style={boxesLayout}>
            {children}
        </div>
    </>)
}

function Box({
    classNames,
    children,
    color,
    height,
    index,
    width
}) {
    return (<>
        <div className={classNames} key={index} style={{backgroundColor: color, width: width, height: height}}>
            {children}
        </div>
    </>)
}

export { Box, Boxes };
