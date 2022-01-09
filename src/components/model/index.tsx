import "./style.scss";
type ModalProps = {
    children: any;
    show: boolean;
    close: any;
};
const Modal = (props: ModalProps) => {
    const { children, show, close } = props;
    return (
        <div className={show ? "modal" : "model-none"}>
            <div
                onClick={close}
                className={show ? "modal-close" : "modal-close-none"}
            ></div>
            <div className={show ? "modal-children" : "model-children-none"}>
                {children}
            </div>
        </div>
    );
};
export default Modal;
