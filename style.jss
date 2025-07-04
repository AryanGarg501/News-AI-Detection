/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    color: #333;
}

/* Header */
header {
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2.2em;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* Sidebar */
.sidebar {
    height: 100%;
    width: 280px;
    position: fixed;
    top: 0;
    left: -280px;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    padding-top: 70px;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
    z-index: 1001;
}

.sidebar.active {
    left: 0;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
    margin-top: 30px;
}

.sidebar ul li {
    padding: 5px 15px;
    text-align: left;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
    display: block;
    font-size: 1.1em;
    transition: all 0.3s;
    padding: 15px;
    border-radius: 8px;
    margin: 5px 10px;
}

.sidebar ul li a:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* Menu Button */
.menu-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 1.5em;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    color: white;
    z-index: 1002;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
}

.menu-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* News Container */
.news-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    padding: 30px;
    max-width: 1300px;
    margin: 20px auto;
}

/* News Item */
.news-item {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.news-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* News Image */
.news-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

/* News Content */
.news-content {
    padding: 22px;
}

.news-content h3 {
    font-size: 1.3em;
    margin: 0 0 12px 0;
    color: #333;
    font-weight: 700;
    line-height: 1.4;
}

.news-content p {
    font-size: 1em;
    color: #666;
    margin: 0 0 18px 0;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

/* Action buttons container */
.news-actions {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 15px;
}

/* Read More Button */
.read-more-btn {
    display: inline-block;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.95em;
    font-weight: 500;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    text-align: center;
}

.read-more-btn:hover {
    background: linear-gradient(to right, #2a5298, #1e3c72);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.verify-btn {
    background: linear-gradient(to right, #11998e, #38ef7d);
    color: white;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 0.95em;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
}

.verify-btn:hover {
    background: linear-gradient(to right, #0f8a7d, #32d76e);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Verification Result Container */
.verification-container {
    margin-top: 15px;
    height: 60px;
    overflow: hidden;
    transition: height 0.3s ease;
}

.verification-result {
    position: relative;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    font-weight: 500;
    color: white;
    margin-top: 5px;
    transform: translateY(-100px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.verification-result.show {
    transform: translateY(0);
    opacity: 1;
}

.verification-result.verified {
    background: linear-gradient(135deg, #11998e, #38ef7d);
}

.verification-result.fake {
    background: linear-gradient(135deg, #eb3349, #f45c43);
}

.verification-result.checking {
    background: linear-gradient(135deg, #4b6cb7, #182848);
}

.verification-result i {
    margin-right: 8px;
    font-size: 1.2em;
}

/* Footer */
footer {
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 30px;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}

footer p {
    margin: 0;
    font-size: 0.95em;
}

/* Loading Animation */
.loading-news {
    text-align: center;
    padding: 50px;
    font-size: 1.2em;
    color: #666;
}

.news-loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.news-loader div {
    position: absolute;
    border: 4px solid #1e3c72;
    opacity: 1;
    border-radius: 50%;
    animation: news-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.news-loader div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes news-loader {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

/* Badge for trending news */
.news-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #ff416c, #ff4b2b);
    color: white;
    font-size: 0.8em;
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: 500;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .news-container {
        grid-template-columns: 1fr;
        padding: 15px;
    }

    h1 {
        font-size: 1.7em;
    }

    .menu-btn {
        left: 15px;
        top: 15px;
        width: 40px;
        height: 40px;
    }
    
    .news-content h3 {
        font-size: 1.2em;
    }
    
    .news-actions {
        flex-direction: column;
        gap: 10px;
    }
    
    .read-more-btn, .verify-btn {
        width: 100%;
    }
}
