interface NotificationsInter {
  init: () => void;
  options: NotificationOptions | undefined;
}

export class Notifications implements NotificationsInter {
  constructor(options?: NotificationOptions | undefined) {
    this.options = options || this.defaultOptions();
    this.init();
  }
  static permission = "";
  public options: NotificationOptions | undefined = undefined;

  init() {
    let notification = null;
    Notification.requestPermission().then((permission) => {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === "granted") {
        notification = new Notification("Hi,欢迎使用BusyBox", this.options);
        Notifications.permission = permission;
      }
    });
    return notification;
  }
  defaultOptions(): NotificationOptions {
    this.options = {
      icon: "../static/login/logo",
      body: "敬请期待BusyBox拿奖的那天",
    };
    return this.options;
  }
}
