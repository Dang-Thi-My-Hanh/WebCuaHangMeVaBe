import React, { useState } from "react";

import axios from "axios";

type Props = {
    phone: string;
};

const RegisterForm: React.FC<Props> = ({
                                           phone
                                       }) => {

    const [userName, setUserName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [confirmPassword,
        setConfirmPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const handleRegister =
        async () => {

            // validate
            if (
                password !== confirmPassword
            ) {

                setError(
                    "Mật khẩu không khớp"
                );

                return;
            }

            try {

                const res = await axios.post(
                    "http://localhost:5000/api/account/register",
                    {
                        userName,
                        email,
                        password,
                        phone
                    }
                );

                console.log(res.data);

                alert("Đăng ký thành công");

            } catch (error) {

                console.log(error);

                setError(
                    "Đăng ký thất bại"
                );
            }
        };

    return (

        <div className="form-box">

            <h3>
                Hoàn tất đăng ký
            </h3>

            <p>
                Vui lòng nhập đầy đủ
                thông tin bên dưới
            </p>

            <input
                type="text"
                placeholder="Nhập họ và tên..."
                value={userName}
                onChange={(e) =>
                    setUserName(
                        e.target.value
                    )
                }
            />

            <input
                type="email"
                placeholder="Nhập email..."
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <input
                type="password"
                placeholder="Nhập mật khẩu..."
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <input
                type="password"
                placeholder="Nhập lại mật khẩu..."
                value={confirmPassword}
                onChange={(e) =>
                    setConfirmPassword(
                        e.target.value
                    )
                }
            />

            {
                error && (
                    <p className="error">
                        {error}
                    </p>
                )
            }

            <button
                onClick={handleRegister}
            >
                Đăng ký
            </button>

        </div>
    );
};

export default RegisterForm;