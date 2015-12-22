module.exports = {
  FriendsActions: {
    FRIENDS_INIT: 'FRIENDS_INIT',
    FRIENDS_INSERT_OR_UPDATE: 'FRIENDS_INSERT_OR_UPDATE',
    FRIENDS_REMOVE: 'FRIENDS_REMOVE',
    FRIENDS_BLOCK: 'FRIENDS_BLOCK',
    FRIENDS_ADD: 'FRIENDS_ADD',
    FRIENDS_PURGE: 'FRIENDS_PURGE'
  },

  ChatActions: {
    CHAT_OPEN: 'CHAT_OPEN',
    CHAT_SWITCH: 'CHAT_SWITCH',
    CHAT_CLOSE: 'CHAT_CLOSE',
    CHAT_NEW_INCOMING_MESSAGE: 'CHAT_NEW_INCOMING_MESSAGE',
    CHAT_NEW_OUTGOING_MESSAGE: 'CHAT_NEW_OUTGOING_MESSAGE',
    CHAT_CLEAR: 'CHAT_CLEAR'
  },

  UserActions: {
    USER_UPDATE: 'USER_UPDATE',
    USER_CHANGE_STATE: 'USER_CHANGE_STATE',
    USER_CHANGE_STATE: 'USER_CHANGE_NAME'
  },

  NotificationActions: {
    NOTIFICATION_UPDATE_ALL: 'NOTIFICATION_UPDATE_ALL',
    NOTIFICATION_UPDATE_TRADEOFFER_COUNT: 'NOTIFICATION_UPDATE_TRADEOFFER_COUNT'
  },

  UIActions: {
    UI_LOGOUT: 'UI_LOGOUT',
    UI_CHANGE_NAME_OPEN_DIALOG: 'UI_CHANGE_NAME_OPEN_DIALOG',
    UI_CHANGE_NAME_CLOSE_DIALOG: 'UI_CHANGE_NAME_CLOSE_DIALOG',
    UI_ADD_FRIEND_OPEN_DIALOG: 'UI_ADD_FRIEND_OPEN_DIALOG',
    UI_ADD_FRIEND_CLOSE_DIALOG: 'UI_ADD_FRIEND_CLOSE_DIALOG'
  },

  MessageTypes: {
    CHAT_OUR_MESSAGE: 'our-message',
    CHAT_THEIR_MESSAGE: 'their-message'
  }
};
