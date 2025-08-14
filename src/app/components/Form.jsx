import {useContext, useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {Dropdown} from "primereact/dropdown";
import {MultiSelect} from "primereact/multiselect";

import {useTranslation} from "react-i18next";
import Button from "./Button";
import Textarea from "./Textarea";
import Input from "./Input";
import PhoneInput from "react-phone-input-2";
import Radio_Group from "./Radio_Group";
import {profile_pic_avatar} from "../../assets/Images";
import Label_Group from "./Label_Group";
import {Calendar} from "primereact/calendar";
import {file_icon} from "../../assets/Icons";
import AuthContext from "../Context/AuthContext";
import {Link, useParams} from "react-router-dom";

const Form = ({
    Input_List,
    onSubmit,
    receivedCurrentAskValue,
    setReceivedCurrentAskValue,
    button_label,
    btn_class,
    from,
    picture,
    btn_to,
    cancel_btn,
    initialValues,
    with_forget_text,
}) => {
    const {t} = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        control,
        formState: {errors, isDirty},
        handleSubmit,
        watch,
        setValue,
        reset,
    } = useForm({mode: "onChange", defaultValues: initialValues || {}});

    const handleFormSubmit = async (data) => {
        setIsSubmitting(true);
        await onSubmit(data);
        setIsSubmitting(false);
    };

    const [previews, setPreviews] = useState({});
    const {profile_status} = useContext(AuthContext);
    // for forms view only
    useEffect(() => {
        if (profile_status === "submitted") {
            setIsSubmitting(true);
        }
    }, [profile_status]);
    const handleFileChange = (fieldName, e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setValue(fieldName, file);
            setPreviews((prev) => ({
                ...prev,
                [fieldName]: imageUrl,
            }));
        }
    };

    const receivedCurrentAsk = watch("current_ask_received");
    useEffect(() => {
        if (receivedCurrentAsk) {
            setReceivedCurrentAskValue(receivedCurrentAsk);
        }
    }, [receivedCurrentAskValue, receivedCurrentAsk]);
    const formatDate = (date) => {
        const selectedDate = new Date(date);
        const day = String(selectedDate.getDate()).padStart(2, "0");
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const year = selectedDate.getFullYear();

        return `${year}-${month}-${day}`;
    };
    const handleDownload = (file) => {
        if (!file) {
            console.log("No file to download");
            return;
        }

        const fileUrl = file;
        window.open(fileUrl, "_blank");
    };

    const {role} = useParams();
    return (
        <form
            className={`grid text-black gap-[20px] md:gap-[35px] ${from === "profile" ? "p-[20px] md:p-[50px]" : ""}`}
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="grid gap-[30px]">
                {Input_List?.map((item, index) => (
                    <div key={index} className="grid w-full gap-[20px]">
                        {item?.label && (
                            <label
                                htmlFor={item?.fieldName}
                                className={`font-bold  ${item?.type === "radio" ? "text-center" : ""} `}
                            >
                                {t(item?.label)}
                            </label>
                        )}
                        <div
                            className={`${item?.type !== "phone" ? "truncate" : ""} ${
                                item?.type !== "file"
                                    ? ` flex ${
                                          item?.type !== "label_group" &&
                                          item?.type !== "radio" &&
                                          item?.type !== "textarea"
                                              ? " h-[57px]"
                                              : ""
                                      }  gap-[10px] border-[1px] items-start border-[#D9D9D991] rounded-[14px] px-[27px] ${
                                          item?.type !== "calendar" && item?.type !== "custom_file"
                                              ? " py-[17px]"
                                              : "items-center overflow-hidden"
                                      } ${item?.type === "phone" ? "custom_input_container" : ""} 
                            
                            ${item?.type === "radio" ? "!p-0 border-none !gap-0 w-full m-0 grid text-center" : ""}
                            ${item?.type === "dropdown" || item?.type === "multiSelect" ? "items-center" : ""}`
                                    : ""
                            }`}
                        >
                            {/* Icon */}

                            {item.type !== "phone" && item.type !== "radio" ? (
                                <span className="">{item?.icon}</span>
                            ) : null}
                            <Controller
                                name={item.fieldName}
                                control={control}
                                // rules={item.validator}
                                rules={{
                                    validate: (value) => {
                                        if (item.fieldName === "confirm_password") {
                                            const {password} = watch();
                                            return value === password || "Passwords do not match";
                                        }
                                        return true;
                                    },
                                    ...item.validator,
                                }}
                                render={({field}) => {
                                    const {onChange, value} = field;

                                    const handleChange = (newValue) => {
                                        onChange(newValue);
                                    };
                                    return (
                                        <>
                                            {item.type === "input" && (
                                                <Input
                                                    label={item.label}
                                                    type={item.inputType}
                                                    placeholder={t(item.placeholder)}
                                                    error={errors[item.fieldName]?.message}
                                                    disabled={isSubmitting}
                                                    inputValue={value || ""}
                                                    className="auth "
                                                    handleChange={handleChange}
                                                />
                                            )}
                                            {item.type === "textarea" && (
                                                <Textarea
                                                    label={item.label}
                                                    placeholder={t(item.placeholder)}
                                                    error={errors[item.fieldName]?.message}
                                                    disabled={isSubmitting}
                                                    inputValue={value || ""}
                                                    handleChange={handleChange}
                                                    className={`auth ${
                                                        from === "profile" ? "!h-[170px] rounded-none" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "dropdown" && (
                                                <Dropdown
                                                    value={value || null}
                                                    options={item.options}
                                                    loading={item?.loading}
                                                    onChange={(e) => handleChange(e.value)}
                                                    placeholder={t(item.placeholder)}
                                                    disabled={isSubmitting}
                                                    className={`w-full   auth bg-transparent custom_input flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "multiSelect" && (
                                                <MultiSelect
                                                    value={value || []}
                                                    options={item.options}
                                                    onChange={(e) => handleChange(e.value)}
                                                    loading={item?.loading}
                                                    placeholder={t(item.placeholder)}
                                                    disabled={isSubmitting}
                                                    className={`w-full bg-transparent custom_input flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "calendar" && (
                                                <Calendar
                                                    value={value ? new Date(value) : null}
                                                    placeholder={t(item.placeholder)}
                                                    disabled={isSubmitting}
                                                    className={`w-full auth overflow-hidden bg-transparent custom_input h-[57px] justify-center flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                    onChange={(e) => {
                                                        const formattedDate = formatDate(e.value);
                                                        handleChange(formattedDate);
                                                    }}
                                                    // showIcon
                                                    dateFormat="mm/dd/yy"
                                                />
                                            )}
                                            {item.type === "phone" && (
                                                <PhoneInput
                                                    country={"us"}
                                                    value={value || "+966"}
                                                    onChange={handleChange}
                                                    inputClass={`w-full  a uth h-full custom_input  bg-transparent ${
                                                        errors[item.fieldName] ? "input-error" : ""
                                                    }`}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                            {item.type === "radio" && (
                                                <Radio_Group
                                                    label={item.label}
                                                    options={item.options}
                                                    value={value}
                                                    onChange={handleChange}
                                                    error={errors[item.fieldName]?.message}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                            {item.type === "file" && (
                                                <div className="picture w-[133px] h-[133px] mx-auto overflow-hidden relative">
                                                    {previews[item.fieldName] ? (
                                                        <img
                                                            src={previews[item.fieldName]}
                                                            className="w-[133px] rounded-full object-cover h-[133px] mx-auto"
                                                            alt="Profile"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={value ? value : profile_pic_avatar}
                                                            className={`w-[133px] ${
                                                                value ? "rounded-full" : ""
                                                            }  h-[133px]  object-cover mx-auto`}
                                                            alt="Default Avatar"
                                                        />
                                                    )}
                                                    <input
                                                        type="file"
                                                        className="opacity-0 absolute top-0 start-0 w-full h-[133px] mx-auto cursor-pointer"
                                                        onChange={(e) => handleFileChange(item.fieldName, e)}
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            )}
                                            {item.type === "label_group" && (
                                                <Label_Group
                                                    competitors={value || []}
                                                    setCompetitors={handleChange}
                                                    placeholder={t(item.placeholder)}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                            {item.type === "custom_file" && (
                                                <div className="flex-1 h-full w-full ">
                                                    <div className="w-full h-full flex items-center justify-between relative">
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            id={item.fieldName}
                                                            onChange={(e) => handleFileChange(item.fieldName, e)}
                                                            disabled={isSubmitting}
                                                        />
                                                        <label
                                                            htmlFor={item.fieldName}
                                                            className="cursor-pointer  w-full flex items-center justify-between"
                                                        >
                                                            <span
                                                                className="
                                                        truncate"
                                                            >
                                                                {value?.name ||
                                                                    value?.slice(-20) ||
                                                                    t(item.placeholder)}
                                                            </span>

                                                            <span
                                                                role="button"
                                                                onClick={() =>
                                                                    !value?.name && value ? handleDownload(value) : null
                                                                }
                                                                className={`${
                                                                    !value?.name && value ? "rotate_x_180" : ""
                                                                }`}
                                                            >
                                                                {file_icon}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    {errors[item.fieldName]?.message && (
                                                        <p className="error-message">
                                                            {errors[item.fieldName]?.message}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    );
                                }}
                            />
                        </div>
                        {errors[item.fieldName] && (
                            <p className={` error_text relative mt-[-10px] ${item?.type === "file" ? "mx-auto" : ""} `}>
                                {t(errors[item.fieldName]?.message)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {with_forget_text && <Link to={`/auth/forget-password`}>{t("Forget Password ?")}</Link>}
            <div className={`flex ${from === "profile" ? "mx-auto" : ""} items-center gap-[16px] `}>
                {cancel_btn && (
                    <Button
                        type="button"
                        to={`/user/${role}/profile`}
                        text={"cancel"}
                        className={`w-full !font-normal !text-primary_title !bg-[#15CC9642]  ${
                            from !== "profile" ? "!rounded-[14px]" : ""
                        }  ${btn_class}`}
                        disabled={isSubmitting && profile_status !== "submitted"}
                    ></Button>
                )}
                <Button
                    type={isDirty ? "submit" : "button"}
                    loading={isSubmitting && profile_status !== "submitted"}
                    to={isDirty ? "" : btn_to}
                    text={button_label}
                    className={`w-full   ${from !== "profile" ? "!rounded-[14px]" : ""} ${btn_class} `}
                    disabled={isSubmitting && profile_status !== "submitted"}
                ></Button>
            </div>
        </form>
    );
};

export default Form;
