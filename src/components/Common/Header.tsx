import AppBar from '@mui/material/AppBar/AppBar'
import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import Typography from '@mui/material/Typography/Typography'
import { authActions } from 'features/auth/authSlice'
import { useDispatch } from 'react-redux'
import styles from './Common.module.scss'

const Admin = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.header}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        Student Manager
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        logout
      </Button>
                </Toolbar>
                
            </AppBar>    
        </div>
    )
}

export default Admin