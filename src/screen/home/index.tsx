import { useState } from "react";
import "./style.scss";
import axios from "axios";
import { BASE_URL } from "../../config";
import Notification from "../../components/notify";
import Change from "../../img/change.png";
import { LoadingOutlined } from "@ant-design/icons";
import errorAPI from "../../utils/errorAPI";
type ImageState = {
    base64: string | ArrayBuffer | null;
    file: File | null;
    name: string;
};
const Index = () => {
    const [load, setLoad] = useState(false);
    const [img, setImg] = useState<ImageState>({
        base64: "",
        file: null,
        name: "",
    });
    const [text, setText] = useState("");
    function getBase64(file: any) {
        var reader = new FileReader();
        reader.onloadend = function () {
            setImg({ base64: reader.result, file: file, name: file.name });
        };
        reader.readAsDataURL(file);
        return reader;
    }
    const handleImageChange = (val: any) => {
        getBase64(val.target.files[0]);
    };
    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (load) {
            return;
        }
        if (img.file) {
            setLoad(true);
            let formData = new FormData();
            formData.append("img", img.file);
            axios({
                method: "post",
                url: `${BASE_URL}/api/cv`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "*/*",
                },
            })
                .then((res: any) => {
                    setText(res.data.text);
                    setLoad(false);
                })
                .catch((e: any) => {
                    errorAPI(e);
                    setLoad(false);
                });
        } else {
            Notification("Vui lòng chọn ảnh");
        }
    }
    function reset() {
        setImg({
            base64: "",
            file: null,
            name: "",
        });
        setText("");
    }

    return (
        <div className="home">
            {text ? (
                <div className="has-text max-width">
                    <div className="home">
                        <div className="flex justify-end">
                            <span className="cursor-pointer" onClick={reset}>
                                X
                            </span>
                        </div>
                        <p>Biển số: {text}</p>
                        <img
                            className="img-show"
                            alt="Ảnh"
                            src={img.base64 as string}
                        />
                    </div>
                </div>
            ) : (
                <div className="no-text max-width">
                    <h1 className="mt-5 mb-10 text-5xl text-zinc-600 font-bold text-center">
                        Vui lòng chọn ảnh
                    </h1>
                    <form
                        className="flex items-center flex-col"
                        onSubmit={submit}
                    >
                        <label className="custom-file-upload relative">
                            <input
                                type="file"
                                id="image"
                                accept="image/png, image/jpeg"
                                onChange={(e) => handleImageChange(e)}
                            />
                            {img.base64 ? (
                                <>
                                    <img
                                        className="description_inputs_img"
                                        src={img.base64 as string}
                                        alt="ảnh"
                                    />
                                    <div className="change-img justify-center items-center flex-col w-full h-full absolute top-0 left-0">
                                        <img
                                            width={20}
                                            height={20}
                                            src={Change}
                                            alt="+"
                                        />
                                        <p>Change</p>
                                    </div>
                                </>
                            ) : (
                                <div className="description_inputs_image">
                                    <p>+</p>
                                    <p>Ảnh</p>
                                </div>
                            )}
                        </label>
                        <p>{img.name}</p>
                        <div className="mt-7">
                            <button className="px-10" type="submit">
                                {load ? <LoadingOutlined /> : "View"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="h-5 w-full"></div>
        </div>
    );
};
export default Index;
