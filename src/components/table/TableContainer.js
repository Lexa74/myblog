import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import './table.scss'

export const TableContainer = ({data, titlesMenu, activeSection, titlesColumns}) => {
    const paramsAnimateAccordion = [];
    for (let i = 1; i <= titlesMenu.length; i++) {
        if(i === activeSection) {
            paramsAnimateAccordion.push({id: `section${i}`, isActive: true})
        } else {
            paramsAnimateAccordion.push({id: `section${i}`, isActive: false})
        }
    }

    return (
        <div className={'table'}>
            <TableHeader titles={titlesColumns}/>
            <TableBody data={data} titlesMenu={titlesMenu} paramsAnimateAccordion={paramsAnimateAccordion} titlesColumns={titlesColumns}/>
        </div>
    )
}