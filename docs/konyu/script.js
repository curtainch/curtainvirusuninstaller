// script.js
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("warningModal");
    const closeModal = document.getElementById("closeModal");

    // モーダルを表示
    modal.style.display = "block";

    // モーダルを閉じる
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // モーダルの外側をクリックした時にも閉じる
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
