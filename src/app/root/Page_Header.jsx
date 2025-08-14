import {useState} from "react";
import Button from "../components/Button";
import {useTranslation} from "react-i18next";
import Modal from "../components/Modal";

export default function Page_Header({page_title, btn_text, ref}) {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(false);

    return (
        <div className="container">
            <div className="flex items-center justify-between ms-[100px]">
                <h2 className=" font-medium text-[40px] ">{t(page_title)}</h2>
                {btn_text && <Button onClick={() => setVisible(true)} text={btn_text} />}

                <Modal visible={visible} onHide={() => setVisible(false)}>
                    <div className="grid gap-[8px] grid-cols-2">{"test"}</div>
                </Modal>
            </div>
        </div>
    );
}
