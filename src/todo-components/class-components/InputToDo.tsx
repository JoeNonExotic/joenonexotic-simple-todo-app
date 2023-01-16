import React, { Component } from "react";
class InputToDo extends Component<{ addTodoProps: (title: string) => void }> {
    state = {
        title: ""
    };

    /**
     * Handle input field on change.
     * @param e 
     */
    onChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    /**
     * Handle form submission.
     */
    handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: "",
            })
        } else {
            alert("Please write item")
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputToDo;