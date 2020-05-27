`use strict`

const e = React.createElement;

class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false}
    }
    render() {
        if (this.state.liked) {
            return "Liked!";
        }
        return e(
            `button`, {onClick: () => this.setState({ liked: true})}, 'Like'
        );
    }
}

const domContainer = document.querySelector('#portrait');
ReactDOM.render(e(Portrait), domContainer);