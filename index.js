const notifications = document.querySelectorAll('.notification.unreaden');
const notificationsNumber = document.querySelector('.num p');

let currentNotificationsNum = 0;

notifications.forEach(notification => {
    currentNotificationsNum += 1;
    notificationsNumber.textContent = currentNotificationsNum.toString();
})

function markAllAsRead() {
    notifications.forEach(notification => {
      notification.classList.remove('unreaden');

      currentNotificationsNum -= 1;
      notificationsNumber.textContent = currentNotificationsNum.toString();
    });
}