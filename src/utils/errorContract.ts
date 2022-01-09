import Notification from "../components/notify";
function errorContract(err: any) {
    try {
        if (typeof err.data !== "undefined") {
            Notification(err.data.message);
            return;
        }
        Notification(err.message);
    } catch {
        Notification("Đã có lỗi sảy ra, bạn vui lòng thử lại sau");
    }
}
export default errorContract;
