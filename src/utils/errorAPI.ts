import Notification from "../components/notify";
export default function errorAPI(e: any) {
    if (typeof e.response === "undefined") {
        Notification("Lỗi mạng");
        return;
    }
    Notification(e.response.data.message);
}
