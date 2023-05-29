import {Arrow} from "../icons/Arrow";

export const TableSection = ({title, isOpen, onClick, row}) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <>
            <div className="title-accordion" onClick={handleClick}>{title}
                <Arrow addClass={isOpen ? "active" : ""} />
            </div>
            <div className={`table-section ${isOpen ? "active" : ""}`}>
                {row}
            </div>

        </>
    );
};