import { Button, CircularProgress, makeStyles, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useAppSelector } from "app/hooks"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authActions } from "../authSlice"
import styles from './LoginPage.module.scss'
const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogging = useAppSelector((state: any) => state.auth.logging)
    const handleLoginClick = () => {
        dispatch(authActions.login({
            username: '',
            password: '',
        }))
        setTimeout(() => navigate('/admin'), 1500)
    }
 
    return (
        <div className={styles.wrap}>
            <Paper className={styles.box}>
                <Typography variant="h5" component="h1">Login page</Typography>
                <Box mt={4}>
                    <Button onClick={handleLoginClick} color="primary" variant="contained">
                        {isLogging && <CircularProgress size={20} color='error' />} Fake login
                    </Button>
                </Box>
            </Paper>    
        </div>
    )
}

export default LoginPage