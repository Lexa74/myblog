import {TableSection} from "./TableSection";
import {useState} from "react";

export const TableBody = ({data, titlesMenu, paramsAnimateAccordion, titlesColumns}) => {
    const [activeSections, setActiveSections] = useState(paramsAnimateAccordion);
    const handleSectionClick = (id) => {
        setActiveSections((prevActiveSections) => {
            return prevActiveSections.map((section) => {
                if (section.id === id) {
                    return { ...section, isActive: true };
                } else {
                    return { ...section, isActive: false };
                }
            });
        });
    };
    return (
        <>
            {titlesMenu.map((title, index) => (
                <TableSection
                    key={index}
                    titlesColumnsMobile={titlesColumns}
                    title={title}
                    data={data}
                    isOpen={activeSections[index].isActive}
                    onClick={() => handleSectionClick(`section${index + 1}`)}
                />
            ))}
        </>
    )
}