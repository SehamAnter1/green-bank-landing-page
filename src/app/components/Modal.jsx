import {Dialog} from "primereact/dialog";
import {close_modal_icon} from "../../assets/Icons";

const Modal = ({visible, onHide, children}) => {
    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            dismissableMask
            content={
                <div className="w-[704px] border-[1px] p-4 gap-4 rounded-28 border-on-surface-outline-varient grid bg-surface-container-lowest h-[50vh] ">
                    {/* header */}
                    <div className="h-6">
                    {close_modal_icon("var(--on-surface-icon")}
                    </div>
                    {children}
                </div>
            }
            className="rounded-28 w-fit"
            modal
            closeOnEscape
            closable={false}
        ></Dialog>
    );
};

export default Modal;
