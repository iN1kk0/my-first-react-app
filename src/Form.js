import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Notes from './Notes'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            items: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value: '',
            items: [...this.state.items, this.state.value]
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="mainForm" noValidate autoComplete="off">
                    <Input value={this.state.value} onChange={this.handleChange} placeholder="Add Note" inputProps={{ 'aria-label': 'description' }} />
                    <Button
                        variant="contained"
                        color="primary"
                        className="submitButton"
                        type="submit"
                        endIcon={<Icon>send</Icon>}
                    >Send</Button>
                </form>                
                <Notes items={this.state.items} />
            </div>
        )
    }
}

export default Form;