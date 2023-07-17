import React from 'react'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import { grey, red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Post = (prop) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                bgcolor: grey[900],
                marginBottom: 1,
                marginLeft: 10,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                        {prop.post.userId}
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings' sx={{color: grey[200]}}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <Typography sx={{ color: grey[200] }}> 
                        {prop.post.title}
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant='body2' sx={{ color: grey[400]}}>
                    {prop.post.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post
