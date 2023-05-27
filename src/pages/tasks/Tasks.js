import './tasks.scss'

import {Header} from "../../components/header/Header";
import {useEffect, useState} from "react";
import {getPostsPage} from "../../services/api";
import {TableContainer} from "../../components/table/TableContainer";

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const titlesMenu = ['Выполненные задачи', 'Задачи на сегодня', 'Предстоящие задачи'];

    const titlesColumns = [
        {title: 'ID', size: 'small'},
        {title: 'Задача', size: ''},
        {title: 'Статус', size: ''},
        {title: 'Описание', size: ''},
    ]

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
                <TableContainer data={tasks} titlesMenu={titlesMenu} activeSection={2} titlesColumns={titlesColumns}/>
            </div>
        </>
    )
}