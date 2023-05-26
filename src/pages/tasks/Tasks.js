import './tasks.scss'
import '../../components/table/table.scss'

import {Header} from "../../components/header/Header";
import {useEffect, useState} from "react";
import {getPostsPage} from "../../services/api";
import {TableContainer} from "../../components/table/TableContainer";
import {Arrow} from "../../components/icons/Arrow";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const titlesMenu = ['Задачи на сегодня', 'Выполненные задачи', 'Предстоящие задачи'];

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPostsPage(1);
            setTimeout(() => {
                setTasks(result)
            }, 500)
        }
        fetchData()
    }, [])

    const handler1 = () => {
        setIsActive1(!isActive1)
    }
    const handler2 = () => {
        setIsActive2(!isActive2)
    }
    const handler3 = () => {
        setIsActive3(!isActive3)
    }

    return (
        <>
            <Header/>
            <div className="table-container wrapper">
                <h1 className="title">Задачи</h1>
                <TableContainer data={tasks} titlesMenu={titlesMenu} activeSection={2}/>
            </div>
        </>
    )
}