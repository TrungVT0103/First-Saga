import Box from '@mui/material/Box/Box'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import Dashboard from 'features/dashboard'
import Student from 'features/student'
import { Outlet, Route, Routes } from 'react-router-dom'
import styles from './Layout.module.scss'

const Admin = () => {
    return (
        <Box className={styles.wrapAdmin111}>
            <Box className={styles.adminHeader}><Header /></Box>
            <div className={styles.adminContent}>
                <Box className={styles.adminSidebar}><Sidebar /></Box>
                <Box className={styles.adminMain}>
                    <Outlet />
                </Box>
            </div>
        </Box>
    )
}

export default Admin