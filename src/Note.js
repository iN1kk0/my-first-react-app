import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Note extends React.Component {
    render(){
        return (
            <Card>
                <CardContent>
                    <Typography className="cardBody" component="p">
                    {this.props.item}
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => this.props.handleDelete(this.props.id)} size="small">Delete</Button>
                </CardActions>
            </Card>
        );
    }
}

export default Note;