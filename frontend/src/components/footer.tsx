import React from "react";
import './style/footer.css';
import youtube from "../assets/icons/youtobe.jpg";
import zalo from "../assets/icons/zalo.jpg";
import facebook from "../assets/icons/facebook.jpg";
import truck from '../assets/header/truck.svg';
import shield from '../assets/header/shield.svg';
import returnIcon from '../assets/header/refresh.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* TOP ICON */}
            <div className="footer-top">
                <div className="footer-feature">
                    <img src={truck} alt="truck" />
                    <span>Giao hàng nhanh</span>
                </div>

                <div className="footer-feature">
                    <img src={shield} alt="shield" />
                    <span>Đảm bảo chất lượng</span>
                </div>

                <div className="footer-feature">
                    <img src={returnIcon} alt="return" />
                    <span>Đổi trả dễ dàng</span>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="footer-content">
                <div className="footer-column">
                    <h4>KẾT NỐI</h4>

                    <div className="social-icons">
                        <img src={facebook} alt="facebook" />
                        <img src={zalo} alt="zalo" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
                {/* COLUMN 1 */}
                <div className="footer-column">
                    <h4>HỆ THỐNG CỬA HÀNG</h4>
                    <p>Chi nhánh Quy Nhơn</p>
                    <p>Chi nhánh TP.HCM</p>
                    <p>Chi nhánh Hà Nội</p>
                </div>

                {/* COLUMN 2 */}
                <div className="footer-column">
                    <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                    <p>Chính sách đổi trả</p>
                    <p>Chính sách bảo hành</p>
                    <p>Hướng dẫn mua hàng</p>
                </div>

                {/* COLUMN 3 */}
                <div className="footer-column">
                    <h4>VỀ THƯƠNG HIỆU</h4>
                    <p>Giới thiệu</p>
                    <p>Tin tức</p>
                    <p>Liên hệ</p>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                © 2026 Cửa hàng mẹ và bé. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;