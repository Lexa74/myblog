import {Arrow} from "../icons/Arrow";
import {TableRow} from "./TableRow";

export const TableSection = ({title, data, isOpen, onClick, titlesColumnsMobile}) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <>
            <div className="title-accordion" onClick={handleClick}>{title}
                <Arrow addClass={isOpen ? "active" : ""} />
            </div>
            <div className={`table-section ${isOpen ? "active" : ""}`}>
                <TableRow data={data} titleMobile={titlesColumnsMobile}/>
            </div>

        </>
    );
};