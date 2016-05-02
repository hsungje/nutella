var userName = 'temp user name';

module.exports = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Study Planner</a>
                    </div>
                    <a className="navbar-text navbar-right" href="#">logout</a>
                    <p className="navbar-text navbar-right">{userName}</p>
                </div>
            </nav>
        );
    }
})