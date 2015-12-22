var remote = require('remote');

var React = require('react');

var UIActions = require('../actions/ui-actions.js');
var UserStore = require('../stores/user-store.js');
var NotificationStore = require('../stores/notification-store.js');

var CurrentUser = React.createClass({
  _getClassName: function() {
    if(!this.props.user.stateEnum) {
      return 'offline';
    }

    if(this.props.user.inGame) {
      return 'in-game';
    }

    switch (this.props.user.stateEnum) {
      case 0:
        return 'offline';
      default:
        return 'online';
    }
  },

  _onClick: function() {
    event.preventDefault();
    var menu = require('./menus/current-user.js')(UserStore.get());
    menu.popup(remote.getCurrentWindow());
  },

  render: function() {
    var className = 'fa fa-circle ' + this._getClassName();

    return (
      <button className="btn btn-default btn-dropdown" onClick={this._onClick}>
        <i className={className}></i>&nbsp;
        {this.props.user.username || 'Loading...'}
      </button>
    );
  }
});

var PendingTradeOffers = React.createClass({
  _onClick: function() {
  },

  _onChange: function() {
    this.setState({ notifications: NotificationStore.get() });
  },

  getInitialState: function() {
    return {
      notifications: NotificationStore.get()
    };
  },

  componentDidMount: function() {
    NotificationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NotificationStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var tradeOffers = this.state.notifications.tradeOffers;
    var badge = <span/>;

    if(tradeOffers && tradeOffers > 0) {
      badge = <span className="badge">{tradeOffers}</span>;
    }

    return (
      <button className="btn btn-default" title="Pending trade offers" onClick={this._onClick}>
        <i className="fa fa-exchange"></i>
        {badge}
      </button>
    );
  }
});

var Notifications = React.createClass({
  _onClick: function() {
  },

  _onChange: function() {
    this.setState({ notifications: NotificationStore.get() });
  },

  getInitialState: function() {
    return {
      notifications: NotificationStore.get()
    };
  },

  componentDidMount: function() {
    NotificationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NotificationStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var count = this.state.notifications.unreadComments +
      this.state.notifications.unreadMessages;
    var badge = <span/>;

    if(count && count > 0) {
      badge = <span className="badge">{count}</span>;
    }

    return (
      <button className="btn btn-default" title="Steam notifications" onClick={this._onClick}>
        <i className="fa fa-envelope-o"></i>
        {badge}
      </button>
    );
  }
});

var Toolbar = React.createClass({
  _onChange: function() {
    this.setState({ user: UserStore.get() });
  },

  _onLogout: function(event) {
    event.stopPropagation();
    UIActions.logout();
  },

  _onAddFriend: function() {
    UIActions.addFriendOpenDialog();
  },

  getInitialState: function() {
    return {
      user: UserStore.get()
    };
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="toolbar-actions">
        <CurrentUser user={this.state.user}/>

        <div className="btn-group">
          <button className="btn btn-default" onClick={this._onAddFriend}>
            <i className="fa fa-user-plus"></i>
          </button>
          <button className="btn btn-default">
            <i className="fa fa-cog"></i>
          </button>
        </div>

        <PendingTradeOffers />
        <Notifications />

        <button className="btn btn-default pull-right" onClick={this._onLogout}>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    );
  }
});

module.exports = Toolbar;
