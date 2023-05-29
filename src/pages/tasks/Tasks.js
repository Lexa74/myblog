import './tasks.scss'

import {Header} from "../../components/header/Header";
import {useEffect, useState} from "react";
import {getPostsPage} from "../../services/api";
import {TableContainer} from "../../components/table/TableContainer";
import {CustomSelect} from "../../components/UI/CustomSelect";
import {Loader} from "../../components/icons/Loader";

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const titlesMenu = ['Выполненные задачи', 'Задачи на сегодня', 'Предстоящие задачи'];

    const titlesColumns = ['ID', 'Задача', 'Статус', 'Описание']

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPostsPage(1);
            setTimeout(() => {
                setTasks(result)
            }, 500)
        }
        fetchData()

    }, [])

    return (
        <>
            <Header/>
            <div className="table-container wrapper">
                <h1 className="title">Задачи</h1>
                <TableContainer titlesMenu={titlesMenu} activeSection={2} titlesColumns={titlesColumns}>
                    {tasks.length !== 0 ? (
                        <>
                            {tasks.map((task) => (
                                <div className={'table-row'} key={task.id}>
                                    <div className="table-row__cell cell-size">
                                        <div className={'row-title-mobile'}>{titlesMenu[0]}</div>
                                        <div className="table-row__cell_content">{task.id}</div>
                                    </div>
                                    <div className="table-row__cell cell-size">
                                        <div className={'row-title-mobile'}>{titlesMenu[1]}</div>
                                        <div className="table-row__cell_content">{task.title}</div>
                                    </div>
                                    <div className="table-row__cell cell-size">
                                        <div className={'row-title-mobile'}>{titlesMenu[2]}</div>
                                        <CustomSelect
                                            label={'Статус'}
                                            optionsVal={['done', 'pause', 'inProgress']}
                                            labelOptions={['Выполнено', 'На паузе', 'В работе']}
                                            customClass={'table-row__cell_content'}
                                        />
                                    </div>
                                    <div className="table-row__cell cell-size">
                                        <div className={'row-title-mobile'}>{titlesMenu[3]}</div>
                                        <div className="table-row__cell_content">{task.body}</div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : <Loader/>}
                </TableContainer>
            </div>
        </>
    )
}